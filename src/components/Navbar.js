import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo-navbar" onClick={closeMobileMenu}>
            CodeSmell <FontAwesomeIcon icon={faCode} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars } color="white" />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dispensables"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dispensables
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/change-preventer"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Change Preventer
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
