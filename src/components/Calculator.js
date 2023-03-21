import React from 'react';
import Keys from './keys';
import calculate from '../logic/calculator';

class Cal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  componentDidMount = () => {
    this.setState({
      total: 0,
      next: null,
      operation: null,
    });
  }

  render() {
    const handleEvent = (e) => {
      const oprObject = calculate(this.state, e.target.textContent);
      this.setState(oprObject);
    };

    const { total, operation, next } = this.state;
    const oprnd = operation === '%' ? 'mod' : operation;
    let result = '';
    if (total) {
      result = `${total} ${oprnd || ''} ${next || ''}`;
    } else if (next) {
      result = `${next} ${oprnd || ''}`;
    }
    return (
      <div className="calDisplay">

        <div className="result">{result || 0 }</div>
        <Keys styles="oprt gry" handleEvent={(e) => handleEvent(e)} value="AC" />
        <Keys styles="oprt gry" handleEvent={(e) => handleEvent(e)} value="+/-" />
        <Keys styles="oprt gry" handleEvent={(e) => handleEvent(e)} value="%" />
        <Keys styles="oprt op" handleEvent={(e) => handleEvent(e)} value="÷" />
        <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} value="7" />
        <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} value="8" />
        <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} value="9" />
        <Keys styles="digit op" handleEvent={(e) => handleEvent(e)} value="x" />
        <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} value="4" />
        <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} value="5" />
        <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} value="6" />
        <Keys styles="digit op" handleEvent={(e) => handleEvent(e)} value="-" />
        <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} value="1" />
        <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} value="2" />
        <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} value="3" />
        <Keys styles="digit op" handleEvent={(e) => handleEvent(e)} value="+" />
        <Keys styles="digit span gry" handleEvent={(e) => handleEvent(e)} value="0" />
        <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} value="." />
        <Keys styles="digit op" handleEvent={(e) => handleEvent(e)} value="=" />
      </div>
    );
  }
}
export default Cal;
