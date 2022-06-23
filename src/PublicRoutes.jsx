import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Work from "./Work/Work";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="." element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="work" element={<Work />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default PublicRoutes;
