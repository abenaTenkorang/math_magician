import React from 'react';

class Cal extends React.PureComponent {
  render() {
    return (
      <div className="calDisplay">
        <div className="result">0</div>
        <div className="oprt gry">AC</div>
        <div className="oprd gry">&#43;/&minus;</div>
        <div className="oprt gry">%</div>
        <div className="oprt op">&divide;</div>
        <div className="digit gry">7</div>
        <div className="digit gry">8</div>
        <div className="digit gry">9</div>
        <div className="digit op">&times;</div>
        <div className="digit gry">4</div>
        <div className="digit gry">5</div>
        <div className="digit gry">6</div>
        <div className="digit op">-</div>
        <div className="digit gry">1</div>
        <div className="digit gry">2</div>
        <div className="digit gry">3</div>
        <div className="digit op">+</div>
        <div className="digit span gry">0</div>
        <div className="digit gry">.</div>
        <div className="digit gry">=</div>
      </div>
    );
  }
}

export default Cal;
