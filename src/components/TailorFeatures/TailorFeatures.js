import React, { useState, useEffect } from "react";
import placeholder1 from "../../assets/images/projectmanager.jpeg";
import placeholder2 from "../../assets/images/invoice.jpeg";
import placeholder3 from "../../assets/images/contract.jpeg";
import "./TailorFeatures.scss";

const TailorFeatures = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [activeImage, setActiveImage] = useState(placeholder1); // Default active image

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSectionClick = (image) => {
    setActiveImage(image);
  };

  const renderImages = () => {
    if (screenSize < 768) {
      // Mobile view, showing only the relevant image and text
      return (
        <div>
          <div className="tailor-features__container">
            <img
              src={placeholder1}
              alt="Feature"
              className="tailor-features__img"
            />
            <h3 className="tailor-features__subtitle">Client Management</h3>
            <p className="tailor-features__text">
              Effortlessly oversee client bookings, appointments, and projects
              from a centralized platform, ensuring a seamless experience for
              both you and your clients.
            </p>
          </div>
          <div className="tailor-features__container">
            <img
              src={placeholder2}
              alt="Feature"
              className="tailor-features__img"
            />
            <h3 className="tailor-features__subtitle">Invoices</h3>
            <p className="tailor-features__text">
              Craft polished, branded invoices effortlessly and get paid faster
              with our online invoicing solution.
            </p>
          </div>
          <div className="tailor-features__container">
            <img
              src={placeholder3}
              alt="Feature"
              className="tailor-features__img"
            />
            <h3 className="tailor-features__subtitle">Contracts</h3>
            <p className="tailor-features__text">
              Effortlessly send professional contracts for electronic signature,
              empowering clients to sign securely from any device, at any time.
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="tailor-features__container">
          <div className="img_div">
            <img
              src={activeImage}
              alt="Feature"
              className="tailor-features__img"
            />
          </div>
          <div className="tailor-features__sections">
            <div
              className="tailor-features__section"
              onClick={() => handleSectionClick(placeholder1)}
            >
              <h3 className="tailor-features__subtitle">Client Management</h3>
              <p className="tailor-features__text">
                Effortlessly oversee client bookings, appointments, and projects
                from a centralized platform, ensuring a seamless experience for
                both you and your clients.
              </p>
            </div>
            <div
              className="tailor-features__section"
              onClick={() => handleSectionClick(placeholder2)}
            >
              <h3 className="tailor-features__subtitle">Invoices</h3>
              <p className="tailor-features__text">
                Craft polished, branded invoices effortlessly and get paid
                faster with our online invoicing solution.
              </p>
            </div>
            <div
              className="tailor-features__section"
              onClick={() => handleSectionClick(placeholder3)}
            >
              <h3 className="tailor-features__subtitle">Contracts</h3>
              <p className="tailor-features__text">
                Effortlessly send professional contracts for electronic
                signature, empowering clients to sign securely from any device,
                at any time.
              </p>
            </div>
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
