import React from 'react';
import Joi from 'joi-browser';

import { Redirect } from "react-router-dom";

import Form from '../common/form';
import PageHeader from '../common/pageHeader';

import userService from '../../services/userService';

import './signin.scss';

class Signin extends Form {
  state = {
    data: { email: '', password: '' },
    errors: {},
  };

  schema = {
    email: Joi.string().min(6).max(255).required().email().label('Email'),
    password: Joi.string().min(6).max(1024).required().label('Password'),
  };

  doSubmit = async () => {
    const { email, password } = this.state.data;
    try {
      await userService.login(email, password);
      window.location = '/feed'; //refresh the page to get the token, as we do not have global state --> improve with redux or mobex
    } catch (error) {
      if (error.response && error.response.status === 400) {
        this.setState({
          errors: {
            ...this.state.errors,
            email: error.response.data,
          },
        });
      }
    }
  };

  render() {
    if (userService.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div className="signin container">
        <PageHeader titleText="Sign in with your details" />
        <div className="row">
          <div className="col-12">
            <h4 className="text-center">Login and join the party!</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 m-auto">
            <form onSubmit={this.handleSubmit} autoComplete="off" noValidate>
              {this.renderInput('email', 'Email', 'email')}
              {this.renderInput('password', 'Password', 'password')}
              {this.renderButton('Log In')}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
