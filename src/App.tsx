import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import "./index.scss";
import HomePage from "./pages/Homepage/index.tsx";
import Header from "./components/Header/index.tsx";
import Footer from "./components/Footer/index.tsx";
import CarPage from "./pages/CarPage/index.tsx";
import ErrorPage from "./pages/ErrorPage/index.tsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/:stockNumber" element={<CarPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
