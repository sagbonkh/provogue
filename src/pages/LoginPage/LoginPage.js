import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";
import close from "../../assets/icons/close-24px.svg";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5050/tailors/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      navigate(`/tailor/${response.data.id}`);
      // Redirect to another page or update the state based on response
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
      console.error("Login error:", err);
    }
  };
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
      <form onSubmit={handleLogin} className="login__form">
        <h2 className="login__title">Login</h2>
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
      </form>
    </div>
  );
}

export default LoginPage;
