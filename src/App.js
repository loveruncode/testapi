import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar";
import User from "./User";
import Home from "./Home";
import Info from "./Info";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
