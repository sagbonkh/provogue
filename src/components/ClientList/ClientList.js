import React, { useState, useEffect } from "react";
import search from "../../assets/icons/search-24px.svg";
import { useNavigate, useParams } from "react-router-dom";
import "./ClientList.scss";
import axios from "axios";

const ClientList = () => {
  const { id } = useParams();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `http://localhost:8080/tailors/${id}/clients`
          );
          setClients(response.data);
        } catch (error) {
          console.error("Error fetching clients:", error);
        }
      }
    };

    fetchClients();
  }, [id]);

  useEffect(() => {
    console.log("clients", clients);
  }, [clients]);

  return (
    <div className="clientList">
      <h2 className="clientList__title">Clients</h2>
      <form className="searchBar-form">
        <div className="clientList__searchbar">
          <input
            placeholder="Type here to search"
            className="clientList__input"
          />
          <img src={search} className="search-icon" alt="search" />
        </div>
        <button className="clientList__btn">Search</button>
      </form>

      {clients.map((client, index) => {
        return (
          <div className="clientList__grid">
            <div key={index} className="clientList__sect">
              <p className="clientList__text">{client.name}</p>
              <p className="clientList__text">{client.phone}</p>
              <p className="clientList__text">{client.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ClientList;
