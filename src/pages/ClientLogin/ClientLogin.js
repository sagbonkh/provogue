import React, { useState, useEffect } from "react";
import "./ClientLogin.scss";
import axios from "axios";
import "./ClientLogin.scss";
import { Link, useNavigate } from "react-router-dom";
import close from "../../assets/icons/close-24px.svg";

const ClientLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5050/client/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      navigate(`/client/${response.data.user.id}`);
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
      console.error("Login error:", err);
    }
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
  const closeRegister = () => {
    navigate("/");
  };
  return (
    <div className="login">
      <img
        src={close}
        alt="close"
        className="register-close"
        onClick={closeRegister}
      />
      <div className="register-sect">
        <div className="register-sect__location">
          <p className="register-sect__text">Provogue</p>
          <p className="register-sect__text">{formattedDate}</p>
          <p className="register-sect__text">{formattedTime}</p>
        </div>
      </div>
      <form onSubmit={handleLogin} className="login__form">
        <h2 className="login__title">Client Login</h2>
        <div className="login__div">
          <label className="login__label">Email:</label>
          <input
            type="text"
            value={email}
            className="login__input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login__div">
          <label className="login__label">Password:</label>
          <input
            type="password"
            className="login__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login__btn">
          Login
        </button>
        {error && <p>{error}</p>}
        <p>
          New here? No worries <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default ClientLogin;
