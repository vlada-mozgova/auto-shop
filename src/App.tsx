import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";
import HomePage from "./pages/Homepage/index.tsx";
import Header from "./components/Header/index.tsx";
import Footer from "./components/Footer/index.tsx";
import CarPage from "./pages/CarPage/index.tsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:stockNumber" element={<CarPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
