import React from 'react';
import './App.css';

import Cal from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="show">
        <Cal />
      </div>
    );
  }
}

export default App;
