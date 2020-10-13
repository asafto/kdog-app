import React, { Component } from 'react';
import './home.scss';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home m-auto">
        <div className="row">
          <div className="col-12 mt-2 text-center">
            <h1>Kdog App</h1>
            <h4>Made With Love For All Dog Lovers</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-2">
            <p className="text-center">Post pictures and share the love</p>
            <p className="text-center">Schedule play-dates with Kdog friends</p>
            <p className="text-center">
              Find dog-walkers and vetrinars nearby
            </p>
            <p className="text-center">
              Buy dog products with Kdog discounts
            </p>
          </div>
        </div>
        <div className="col-12 col-md-11 col-lg-5 m-auto">
          <img
            src="../././miko.jpg"
            alt="Miko"
            className="d-block w-100 m-auto"
          />
        </div>
      </div>
    );
  }
}

export default Home;
