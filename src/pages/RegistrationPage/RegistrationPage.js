import React, { useState } from "react";
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
      if (role === "client") {
        navigate("/");
      } else {
        navigate(`/tailor/${response.data.id}`);
      }
    } catch (error) {
      console.error("Registration failed:", error.response.data);
    }
  };
  const closeRegister = () => {
    navigate("/");
  };

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
        <p className="register-sect__text">Let's help get you set up </p>
        <div className="register-sect__location">
          <p className="register-sect__text">Provogue</p>
          <p className="register-sect__text">May 05, 2020</p>
          <p className="register-sect__text">9:00 AM - 1:00 PM</p>
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
