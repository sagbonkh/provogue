import React, { useState, useEffect } from "react";
import search from "../../assets/icons/search-24px.svg";
import { useNavigate, useParams } from "react-router-dom";
import "./ClientList.scss";
import axios from "axios";
import AddClientModal from "../AddClientModal/AddClientModal";

const ClientList = () => {
  const { id } = useParams();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    if (id) {
      try {
        const response = await axios.get(
          `http://localhost:5050/tailors/${id}/clients`
        );
        setClients(response.data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    }
  };

  useEffect(() => {
    console.log("clients", clients);
  }, [clients]);

  return (
    <div className="clientList">
      <h2 className="clientList__title">Clients</h2>
      <form className="searchBar-form">
        <div className="clientList__searchArea">
          <div className="clientList__searchbar">
            <input
              placeholder="Type here to search"
              className="clientList__input"
            />
            <img src={search} className="search-icon" alt="search" />
          </div>
          <button className="clientList__btn">Search</button>
        </div>
      </form>
      {clients.length > 0 ? (
        clients.map((client, index) => {
          return (
            <div className="clientList__grid">
              <div key={index} className="clientList__sect">
                <p className="clientList__text">{client.name}</p>
                <p className="clientList__text">{client.phone}</p>
                <p className="clientList__text">{client.email}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="clientList__noClients">
          <p>You don't have any clients yet</p>
        </div>
      )}
    </div>
  );
};

export default ClientList;
