import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Kart from "./components/kartlar/kart";
import "./app.css"
function App() {
  return (
    <div className="App">
      <div className="main">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/kart" element={<Kart />} />

          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
