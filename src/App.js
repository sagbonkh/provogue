import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ClientRegisterPage from "./pages/ClientRegisterPage/ClientRegisterPage";
import ClientBooking from "./pages/ClientBooking/ClientBooking";
import TailorDashboard from "./pages/TailorDashboard/TailorDashboard";
import TailorRedirect from "./pages/TailorRedirect/TailorRedirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register-client" element={<ClientRegisterPage />} />
        <Route path="booking-client" element={<ClientBooking />} />
        <Route path="tailor" element={<TailorDashboard />} />
        <Route path="redirect-tailor" element={<TailorRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
