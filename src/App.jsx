import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddEvent from "./pages/AddEvent.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddEvent />} />
    </Routes>
  );
}
