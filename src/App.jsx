import React from 'react';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import './App.scss';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>
      <main className="container flex-fill m-2">main</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
