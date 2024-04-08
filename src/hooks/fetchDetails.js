import { useState, useEffect } from "react";
import axios from "axios";

const FetchDetails = (baseUrl, selectedVid) => {
  const [displayVid, setDisplayVid] = useState(null);

  useEffect(() => {
    if (selectedVid) {
      const fetchDisplayVid = async () => {
        try {
          const response = await axios.get(`${baseUrl}/videos/${selectedVid}`);
          setDisplayVid(response.data);
        } catch (error) {
          console.error("Error fetching display video:", error);
        }
      };

      fetchDisplayVid();
    }
  }, [baseUrl, selectedVid]);

  return displayVid;
};

export default FetchDetails;
