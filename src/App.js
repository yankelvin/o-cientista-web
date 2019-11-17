import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import { Header } from "./pages/Header/Header";
import { Footer } from "./pages/Footer/Footer";
import { Routes } from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}
