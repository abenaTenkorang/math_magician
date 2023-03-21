import React from 'react';
import './App.css';
import Quotes from './components/Quotes';
import Cal from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Quotes />
        <Cal />
      </div>
    );
  }
}

export default App;
