import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LoginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import close from "../../assets/icons/close-24px.svg";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5050/tailors/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      navigate(`/tailor/${response.data.user.id}`);
      // Redirect to another page or update the state based on response
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
      console.error("Login error:", err);
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
        <h2 className="login__title">Tailor Login</h2>
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
}

export default LoginPage;
