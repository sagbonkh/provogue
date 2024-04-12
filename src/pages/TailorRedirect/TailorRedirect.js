import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TailorRedirect.scss";
import TailorDashboard from "../TailorDashboard/TailorDashboard";

const TailorRedirect = () => {
  const [tailor, setTailors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchTailors();
  }, []);

  const fetchTailors = async () => {
    try {
      const response = await axios.get("http://localhost:8080/tailors/1");
      setTailors(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching tailors:", error);
    }
  };
  return (
    <div>
      {isLoading ? <p>Loading...</p> : <TailorDashboard tailorId={tailor.id} />}
    </div>
  );
};

export default TailorRedirect;
