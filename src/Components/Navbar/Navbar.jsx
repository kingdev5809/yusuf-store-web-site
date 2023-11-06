import React from "react";
import "./Navbar.scss";
import logo from "../../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faGlobe,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  return (
    <nav>
      <div className="nav__logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav__searchBar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text"></input>
      </div>
      <ul className="nav__menu">
        <li>
          <a href="/#">Asosiy</a>
        </li>
        <li>
          <a href="/#">Mahsulotlar</a>
        </li>
        <li>
          <a href="/#">Bog'lanish</a>
        </li>
      </ul>
      <ul className="nav__icons">
        <li>
          <a href="/#">
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
        </li>
        <li>
          <a href="/#">
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </li>
        <li>
          <a href="/#">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
