import React from 'react';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
// import { Redirect } from "react-router-dom";

import http from '../../services/httpService';
// import userService from "../services/userService";
import { apiUrl } from '../../config.json';

import Form from '../common/form';
import PageHeader from '../common/pageHeader';

import './signup.scss';

class Signup extends Form {
  state = {
    data: {
      name: '',
      password: '',
      email: '',
      birthdate: '',
      gender: '',
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().min(2).max(255).label('Name'),
    email: Joi.string().min(6).max(255).required().email().label('Email'),
    password: Joi.string().min(6).max(1024).required().label('Password'),
    birthdate: Joi.date().label('Birthdate'),
    gender: Joi.string().valid('Female', 'Male', 'Other').label('Gender'),
  };

  doSubmit = async () => {
    const { history } = this.props;

    const data = { ...this.state.data, role: 'Regular' };
    try {
      await http.post(`${apiUrl}/users`, data);
      history.push('/signin');
      toast('You are now a Kdog user! sign in and join the party!', {
        position: 'top-center',
        type: 'success',
        // closeOnClick: true
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        this.setState({
          errors: {
            ...this.state.errors,
            email: 'Email is already registered',
          },
        });
      }
    }
  };

  render() {
    return (
      <div className="container">
        <PageHeader titleText="Sign up for Kdog app" />
        <div className="row">
          <div className="col-12">
            <h4 className="text-center">Open a new Kdog account for free</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 m-auto">
            <form onSubmit={this.handleSubmit} autoComplete="off" noValidate>
              {this.renderInput('name', '* Name')}
              {this.renderInput('email', '* Email', 'email')}
              {this.renderInput('password', '* Password', 'password')}
              {this.renderInput('birthdate', 'Birthdate', 'date')}
              {this.renderSelect('gender', 'Gender', [
                'Select Your Gender',
                'Male',
                'Female',
                'Other',
              ])}
              {this.renderButton('Sign Up')}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
