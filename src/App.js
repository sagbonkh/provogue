import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="upload" element={<UploadPage />} />
        <Route path="/video/:idFromParams" element={<HomePage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
