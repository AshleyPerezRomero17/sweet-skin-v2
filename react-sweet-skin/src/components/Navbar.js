import React from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <nav id="nav">
        <a className="brand-name" href="/src/components/Index">
            <h2>Sweet Skin</h2>
        </a>

        <ul className="center-nav">
            <li id="flex-start"><a href="/src/components/Index"><img id="logo" src="/assets/img/logo.png" alt="logo" /></a>
            </li>
            <li id="selected">
              <NavLink activeclassname="active" to="/src/components/Index">Home</NavLink></li>
            <li id="selected"><NavLink activeclassname="active" to="/src/components/AboutUs">About Us</NavLink></li>
            <li id="selected"><NavLink activeclassname="active" to="/src/components/Contact">Contact</NavLink></li>
            <li id="selected"><NavLink activeclassname="active" to="/src/components/Products">Products</NavLink></li>
        </ul>

        <ul className="side-nav">
            <li><a href="/src/components/Products"><span className="fa fa-solid fa-magnifying-glass"></span></a></li>
            <li><a href="/src/components/Products"><span className="fa fa-solid fa-bag-shopping"></span></a></li>
        </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
