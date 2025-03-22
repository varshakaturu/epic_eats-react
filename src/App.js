import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Layouts/Header";  // Ensure correct path
import Home from "./pages/Home/Home";
import About from "./pages/Home/Section1";
import Menu from "./pages/Home/Section3";
import Shop from "./pages/Home/Section3";
import Blog from "./pages/Home/Section6";
import Contact from "../src/components/Layouts/Footer";

function App() {
  return (
    <Router>
      <Header /> {/* This ensures Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
