import React from 'react';
import './App.css';
import Quotes from './components/Quotes';
import Cal from './components/Calculator';

import Footer from './components/Footer';
import NavBar from './components/NavBar';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <div className="home">
          <NavBar />
          <div className="App">
            <Quotes />
            <Cal />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
