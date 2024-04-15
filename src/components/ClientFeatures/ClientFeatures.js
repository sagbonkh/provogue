import React, { useState, useEffect } from "react";
import placeholder1 from "../../assets/images/placeholder.png";
import placeholder2 from "../../assets/images/placeholder.png";
import placeholder3 from "../../assets/images/placeholder.png";
import placeholder4 from "../../assets/images/placeholder.png";
import "./ClientFeatures.scss";

const ClientFeatures = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderImages = () => {
    if (screenSize < 768) {
      return (
        <div className="container">
          {/* Placeholder 1 */}
          <div className="Client-features__container">
            <img
              src={placeholder1}
              alt="Placeholder 1"
              className="Client-features__img"
            />
            <div className="Client-features__section">
              <h3 className="Client-features__subtitle">Client Management</h3>
              <p className="Client-features__text">
                Effortlessly oversee client bookings, appointments, and projects
                from a centralized platform, ensuring a seamless experience for
                both you and your clients.
              </p>
            </div>
          </div>
          {/* Placeholder 2 */}
          <div className="Client-features__container">
            <img
              src={placeholder2}
              alt="Placeholder 2"
              className="Client-features__img"
            />
            <div className="Client-features__section">
              <h3 className="Client-features__subtitle">Invoices</h3>
              <p className="Client-features__text">
                Craft polished, branded invoices effortlessly and get paid
                faster with our online invoicing solution.
              </p>
            </div>
          </div>
          {/* Placeholder 3 */}
          <div className="Client-features__container">
            <img
              src={placeholder3}
              alt="Placeholder 3"
              className="Client-features__img"
            />
            <div className="Client-features__section">
              <h3 className="Client-features__subtitle">Contracts</h3>
              <p className="Client-features__text">
                Effortlessly send professional contracts for electronic
                signature, empowering clients to sign securely from any device,
                at any time.
              </p>
            </div>
          </div>
          {/* Placeholder 4 */}
          <div className="Client-features__container">
            <img
              src={placeholder4}
              alt="Placeholder 4"
              className="Client-features__img"
            />
            <div className="Client-features__section">
              <h3 className="Client-features__subtitle">Quotes</h3>
              <p className="Client-features__text">
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
        <div className="Client-features__container">
          <div className="img_div">
            <img
              src={placeholder1}
              alt="Placeholder 1"
              className="Client-features__img"
            />
          </div>
          <div className="Client-features__sections">
            <div className="Client-features__section">
              <h3 className="Client-features__subtitle">Service Requests</h3>
              <p className="Client-features__text">
                Easily submit service requests and specifications, providing
                tailors with all the necessary details.
              </p>
            </div>
            <div className="Client-features__section">
              <h3 className="Client-features__subtitle">Project Tracking</h3>
              <p className="Client-features__text">
                Monitor the progress of your projects in real-time, ensuring
                transparency and peace of mind.
              </p>
            </div>
            <div className="Client-features__section">
              <h3 className="Client-features__subtitle">Communication Tools</h3>
              <p className="Client-features__text">
                Stay connected with your tailor through built-in messaging and
                collaboration tools.
              </p>
            </div>
            <div className="Client-features__section">
              <h3 className="Client-features__subtitle">Feedback</h3>
              <p className="Client-features__text">
                Provide feedback and reviews on completed projects, helping
                tailor continuously improve their services.
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="Client-features">
      <h2 className="Client-features__title">For Clients</h2>
      <p className="Client-features__subtext">
        Seamless Experience, Exceptional Results
      </p>
      {renderImages()}
    </section>
  );
};

export default ClientFeatures;
