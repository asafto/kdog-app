import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';

import './App.scss';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>
      <main className="container flex-fill pb-2">
        <Switch>
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
