import React, { useState, useEffect } from "react";
import logo from "./images/logo.png";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container mr-5">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="logo mr-3" src={logo} alt="empowered-logo" />
            EMPOWERED
          </Link>
          <div className="language-select m-10">
          <select
            className="custom-select"
            value={props.language}
            onChange={e => props.handleSetLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Malayalam">Malayalam</option>
          </select>
        </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/buy" className="nav-links" onClick={closeMobileMenu}>
                Buy
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hire" className="nav-links" onClick={closeMobileMenu}>
                Hire
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/volunteer"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Volunteer
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
