import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ClientRegisterPage from "./pages/ClientRegisterPage/ClientRegisterPage";
import ClientBooking from "./pages/ClientBooking/ClientBooking";
import TailorDashboard from "./pages/TailorDashboard/TailorDashboard";
import TailorRedirect from "./pages/TailorRedirect/TailorRedirect";
import TailorsClients from "./pages/TailorsClients/TailorsClients";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register-client" element={<ClientRegisterPage />} />
        <Route path="booking-client" element={<ClientBooking />} />
        <Route path="/tailor/:id" element={<TailorDashboard />} />
        <Route path="/redirect-tailor" element={<TailorRedirect />} />
        <Route path="/tailor/:id/clients" element={<TailorsClients />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
