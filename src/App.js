import React from "react";
import Nav from "./conponents/Nav";
import Footer from "./conponents/Footer";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/photo-website" element={<Homepage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
