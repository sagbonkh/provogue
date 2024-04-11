import React from "react";
import "./HomeFeatures.scss";
import TailorFeatures from "../TailorFeatures/TailorFeatures";
import ClientFeatures from "../ClientFeatures/ClientFeatures";

const HomeFeatures = () => {
  return (
    <section className="features">
      <h2 className="features__title">
        Seamless Stitching. Effortless Operations. Welcome to Provogue.
      </h2>
      <p className="features__subtext">
        Discover Effortless Enhancements for Your Tailoring Journey.
      </p>
      <TailorFeatures />
      <ClientFeatures />
    </section>
  );
};

export default HomeFeatures;
