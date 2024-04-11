import React, { useState, useEffect } from "react";
import placeholder1 from "../../assets/images/placeholder.png";
import placeholder2 from "../../assets/images/placeholder.png";
import placeholder3 from "../../assets/images/placeholder.png";
import placeholder4 from "../../assets/images/placeholder.png";
import "./TailorFeatures.scss"; // Import your SCSS file

const TailorFeatures = () => {
  const renderImages = () => {
    if (window.innerWidth < 768) {
      return (
        <div className="container">
          <div className="tailor-features__container">
            <img
              src={placeholder1}
              alt="Placeholder 1"
              className="tailor-features__img"
            />
            <div className="tailor-features__section">
              <h3 className="tailor-features__subtitle">Client Management</h3>
              <p className="tailor-features__text">
                Effortlessly oversee client bookings, appointments, and projects
                from a centralized platform, ensuring a seamless experience for
                both you and your clients.
              </p>
            </div>
          </div>
          <div className="tailor-features__container">
            <img
              src={placeholder2}
              alt="Placeholder 2"
              className="tailor-features__img"
            />
            <div className="tailor-features__section">
              <h3 className="tailor-features__subtitle">Invoices</h3>
              <p className="tailor-features__text">
                Craft polished, branded invoices effortlessly and get paid
                faster with our online invoicing solution.
              </p>
            </div>
          </div>
          <div className="tailor-features__container">
            <img
              src={placeholder3}
              alt="Placeholder 3"
              className="tailor-features__img"
            />
            <div className="tailor-features__section">
              <h3 className="tailor-features__subtitle">Contracts</h3>
              <p className="tailor-features__text">
                Effortlessly send professional contracts for electronic
                signature, empowering clients to sign securely from any device,
                at any time.
              </p>
            </div>
          </div>
          <div className="tailor-features__container">
            <img
              src={placeholder4}
              alt="Placeholder 4"
              className="tailor-features__img"
            />
            <div className="tailor-features__section">
              <h3 className="tailor-features__subtitle">Quotes</h3>
              <p className="tailor-features__text">
                Effortlessly send professional contracts for electronic
                signature, empowering clients to sign securely from any device,
                at any time.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      // Render a single image and text section for screens larger than 768px
      return (
        <div className="tailor-features__container">
          <img
            src={placeholder1}
            alt="Placeholder 1"
            className="tailor-features__img"
          />
          <div className="tailor-features__section">
            <h3 className="tailor-features__subtitle">Client Management</h3>
            <p className="tailor-features__text">
              Effortlessly oversee client bookings, appointments, and projects
              from a centralized platform, ensuring a seamless experience for
              both you and your clients.
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="tailor-features">
      <h2 className="tailor-features__title">For Tailors</h2>
      <p className="tailor-features__subtext">Streamline Your Craft</p>
      {renderImages()}
    </section>
  );
};

export default TailorFeatures;
