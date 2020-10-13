import React, { Component } from 'react';
import PageHeader from '../common/pageHeader';


import './signup.scss';

class Signup extends Component {
    state = {  }
    render() { 
        return ( <div className="container">
            <PageHeader titleText="Signup for Kdog app" />
            <div className="row">
                <div className="col-12">
                    <h4 className="text-center">Open a new Kdog account for free</h4>
                </div>
            </div>
        </div> );
    }
}
 
export default Signup;