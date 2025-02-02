import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState,useEffect } from "react";




function App() {
   
   
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/home" element={<Home />} />
       </Routes>
    </Router>
  )
}

export default App
