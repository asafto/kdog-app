import React, { Component } from 'react';
import './home.scss';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container mx-auto">
        <div className="row">
          <div className="col-12 mt-3 text-center">
            <h2>Kdog App</h2>
            <h5>Made With Love For All Dog Lovers</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center mt-2">Post pictures and stories</p>
            <p className="text-center mt-2">Chat with near-by Kdog friends</p>
            <p className="text-center mt-2">
              Find dog-walkers and vetrinars nearby
            </p>
            <p className="text-center mt-2">
              Purchase Kdog products with Kdog discounts
            </p>
          </div>
        </div>
        <div className="col-12 col-md-11 col-lg-6 m-auto">
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
