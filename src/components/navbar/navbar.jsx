import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import {
  FaSignInAlt,
  FaUserPlus,
  MdHome,
  IoMdChatboxes,
} from 'react-icons/all';

import './navbar.scss';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-light" id="navbar">
        <Link className="navbar-brand" to="/">
          <img
            className="kdog-brand"
            src="../././kdog-brand-image.gif"
            alt="kdod brand"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link d-flex flex-column align-items-center"
                to="/feed">
                <MdHome className="custom-icon" />
                Kdog Feed
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link d-flex flex-column align-items-center"
                to="/chat">
                <IoMdChatboxes className="custom-icon" />
                Kdog Chat
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link d-flex flex-column align-items-center"
                to="/signin">
                <FaSignInAlt className="custom-icon" />
                Sign in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link d-flex flex-column align-items-center"
                to="/signup">
                <FaUserPlus className="custom-icon" />
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
