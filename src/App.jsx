import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Signup from './components/signup/signup';
import Signin from './components/signin/signin';
import Logout from './components/logout/logout';
import Feed from './components/feed/feed';
import CreatePost from './components/createPost/createPost';

import userService from './services/userService';
// import http from './services/httpService';
// import { apiUrl } from './config.json';

import './App.scss';

class App extends Component {
  state = {};

  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;

    return (
      <div className="d-flex flex-column min-vh-100">
        <ToastContainer autoClose={5000} />
        <header>
          <Navbar user={user} />
        </header>
        <main className="container flex-fill pb-2">
          <Switch>
            <Route
              path="/feed"
              render={(props) => <Feed {...props} user={user} />}
            />
            <Route path="/createPost" component={CreatePost} />
            <Route path="/logout" component={Logout} />
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
}

export default App;
