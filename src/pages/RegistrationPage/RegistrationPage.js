import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RegistrationPage.scss";
import { useNavigate } from "react-router-dom";
import close from "../../assets/icons/close-24px.svg";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5050/${role}`, {
        name,
        email,
        phone,
        password,
      });
      console.log("Registration successful:", response.data);
      const userId = response.data.id;
      console.log("id", userId);

      if (role === "client") {
        navigate(`/client/${userId}`);
      } else {
        navigate(`/tailor/${userId}`);
      }
    } catch (error) {
      console.error("Registration failed:", error.response.data);
    }
  };
  const closeRegister = () => {
    navigate("/");
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date()); // Update date and time every minute
    }, 60000);

    return () => clearInterval(timer); // Clear interval on component unmount
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = currentDateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
      <img
        src={close}
        alt="close"
        className="register-close"
        onClick={closeRegister}
      />
      <div className="register-sect">
        <h1 className="register-sect__title">Register</h1>
        <p className="register-sect__text">Let's get you set up </p>
        <div className="register-sect__location">
          <p className="register-sect__text">Provogue</p>
          <p className="register-sect__text">{formattedDate}</p>
          <p className="register-sect__text">{formattedTime}</p>
        </div>
      </div>
      <form onSubmit={handleRegister} className="register">
        <div className="register__div">
          <label className="register__label">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="register__input"
            placeholder="Enter your name"
          />
        </div>
        <div className="register__div">
          <label className="register__label">Phone number</label>
          <input
            type="text"
            value={phone}
            className="register__input"
            placeholder="Enter your phone number"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="register__div">
          <label className="register__label">Email</label>
          <input
            type="email"
            value={email}
            className="register__input"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register__div">
          <label className="register__label">Password</label>
          <input
            type="password"
            value={password}
            className="register__input"
            placeholder="Choose a password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="register__div">
          <label className="register__label">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="register__dropdown"
          >
            <option value="client">Client</option>
            <option value="tailors">Tailor</option>
          </select>
        </div>
        <button type="submit" className="register__btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
