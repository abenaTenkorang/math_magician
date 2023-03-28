import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.PureComponent {
  render() {
    return (
      <>
        <div className="navbar">
          <h1 className="heading">Math Magicians</h1>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/calculator">calculator</Link>
            <Link to="/Quotes">Quotes</Link>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
