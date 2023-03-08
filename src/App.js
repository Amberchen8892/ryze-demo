import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Partner from "./pages/partner/Partner";
import Resources from "./pages/resources/Resources";
import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
