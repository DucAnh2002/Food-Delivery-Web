import React, { useState } from "react";
import "./Navbar.css";
import logo2 from "../../assets/logo2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
  faCartShopping,
  faArrowRightToBracket,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState();
  // const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const orders = () => {
    navigate("/myorders");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo2} alt="Logo" className="logo" />
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fas fa-bars"></i>
        </div>
      </Link>

      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>

      <div className="navbar-right">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search" />
        <div className="navbar-cart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {/* // login with Auth0 */}

        {/* {isAuthenticated ? (
          <div className="user-info">
            <img src={user.picture} alt={user.name} className="user-avatar" />
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log out
            </button>
          </div>
        ) : (
          <button onClick={() => loginWithRedirect()}>Sign in</button>
        )} */}
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <FontAwesomeIcon icon={faUserShield} className="bag-shopping" />
            <ul className="nav-profile-dropdown">
              <li onClick={orders}>
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className="bag-shopping"
                />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  className="logout-icon"
                />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
