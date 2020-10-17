import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Signin from './components/signin/signin';

import './App.scss';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ToastContainer autoClose={5000} />
      <header>
        <Navbar />
      </header>
      <main className="container flex-fill pb-2">
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
