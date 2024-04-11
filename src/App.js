import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ClientRegisterPage from "./pages/ClientRegisterPage/ClientRegisterPage";
import ClientBooking from "./pages/ClientBooking/ClientBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register-client" element={<ClientRegisterPage />} />
        <Route path="booking-client" element={<ClientBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
