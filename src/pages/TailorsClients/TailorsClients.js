import React from "react";
import "./TailorsClients.scss";
import classy from "../../assets/images/classywoman.jpeg";
import mannequine from "../../assets/images/manniquein.jpeg";
import fashionguy from "../../assets/images/fashionguy.jpeg";
import kids from "../../assets/images/uniform.jpeg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import ClientList from "../../components/ClientList/ClientList";

const TailorsClients = () => {
  return (
    <div className="client-container">
      <Header />
      <div className="clients">
        <Sidebar />
        <div className="image-section">
          <div className="clients__txt-sect">
            <h1 className="clients__title">Your Beautiful Clientele</h1>
            <p className="clients__subtext">
              Experience the world of fashion through our vibrant community of
              clients.
            </p>
          </div>
          <div className="clients__images">
            <img src={classy} className="clients__hero" alt="woman" />
            <div className="clients__img-set">
              <img src={mannequine} className="clients__img" alt="mannequine" />
              <img src={fashionguy} className="clients__img" alt="man" />
              <img src={kids} className="clients__img" alt="kids" />
            </div>
          </div>
        </div>
      </div>
      <ClientList />
      <Footer />
    </div>
  );
};

export default TailorsClients;
