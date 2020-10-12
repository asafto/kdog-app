import React, { Component } from 'react';

import { FaSignInAlt, FaUserPlus, MdHome, IoMdChatboxes } from 'react-icons/all';

import './navbar.scss';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-light shadow-lg" id="navbar">
        <a className="navbar-brand" href="#">
          <img
            className="kdog-brand"
            src="./kdog-brand-image.gif"
            alt="kdod brand"
          />
        </a>
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
              <a
                className="nav-link d-flex flex-column align-items-center"
                href="#">
                <MdHome className="custom-icon" />
                Kdog Feed
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex flex-column align-items-center"
                href="#">
                <IoMdChatboxes className="custom-icon" />
                Kdog Chat
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link d-flex flex-column align-items-center"
                href="#">
                <FaSignInAlt className="custom-icon"/>
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex flex-column align-items-center"
                href="#">
                <FaUserPlus className="custom-icon"/>
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
