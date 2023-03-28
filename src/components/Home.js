import React from 'react';

class Home extends React.PureComponent {
  render() {
    return (

      <>
        <div className="home">
          <h2 className="mini">Welcome to Math Magicians!</h2>

          <p>
            Math Magicians is a simple calculator app that allows you to do basic math calculations.
            Mathemagician is a neologism, specifically a portmanteau, that combines mathematician
            and magician.
          </p>

          <p>
            Math Magicians can help you perform the following operations:
          </p>
          <ul className="list">
            <li>Addition</li>
            <li>Subtraction</li>
            <li>Multiplication</li>
            <li>Division</li>
          </ul>

        </div>

      </>
    );
  }
}

export default Home;
