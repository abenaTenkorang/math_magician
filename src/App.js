import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Quotes from './components/Quotes';
import Cal from './components/Calculator';

import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <NavBar />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="calculator" element={<Cal />} />
            <Route path="Quotes" element={<Quotes />} />
          </Routes>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
