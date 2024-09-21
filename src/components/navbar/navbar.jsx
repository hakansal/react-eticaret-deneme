import React from "react";
import { Link } from "react-router-dom";
import  "./navbar.css";
const Navbar = () => {
  return <div>
    <div>
      <nav className="navbar">
        <div>
          <h1>logo</h1>
        </div>
        <div className="buttons">
           <Link to="/konum">Konum</Link> 
          <Link to="/ürünler">Ürünler</Link>
          <Link to="/iletişim">İletişim</Link>

        </div>
      </nav>
    </div>
  </div>
};
export default Navbar;