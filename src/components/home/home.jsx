import React, { Component } from 'react';

import PageHeader from '../common/pageHeader';

import './home.scss';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container home">
        <PageHeader titleText="Kdog App" className="text-center" />
        <div className="row m-auto">
          <div className="col-12 mt-2">
            <h4 className="text-center">Made With Love For All Dog Lovers</h4>
            <p className="text-center">Post pictures and share the love</p>
            <p className="text-center">Schedule play-dates with Kdog friends</p>
            <p className="text-center">Find dog-walkers and vetrinars nearby</p>
            <p className="text-center">Buy dog products with Kdog discounts</p>
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
