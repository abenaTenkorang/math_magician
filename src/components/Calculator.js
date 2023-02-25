import React, { useState } from 'react';
import Keys from './Keys';
import calculate from '../logic/calculator';

const Cal = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleEvent = (e) => {
    const oprObject = calculate(state, e.target.textContent);
    setState(oprObject);
  };

  const { total, operation, next } = state;
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
      <Keys styles="oprt gry" handleEvent={(e) => handleEvent(e)} val="AC" />
      <Keys styles="oprt gry" handleEvent={(e) => handleEvent(e)} val="+/-" />
      <Keys styles="oprt gry" handleEvent={(e) => handleEvent(e)} val="%" />
      <Keys styles="oprt op" handleEvent={(e) => handleEvent(e)} val="÷" />
      <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} val="7" />
      <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} val="8" />
      <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} val="9" />
      <Keys styles="digit op" handleEvent={(e) => handleEvent(e)} val="x" />
      <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} val="4" />
      <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} val="5" />
      <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} val="6" />
      <Keys styles="digit op" handleEvent={(e) => handleEvent(e)} val="-" />
      <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} val="1" />
      <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} val="2" />
      <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} val="3" />
      <Keys styles="digit op" handleEvent={(e) => handleEvent(e)} val="+" />
      <Keys styles="digit span gry" handleEvent={(e) => handleEvent(e)} val="0" />
      <Keys styles="digit gry" handleEvent={(e) => handleEvent(e)} val="." />
      <Keys styles="digit op" handleEvent={(e) => handleEvent(e)} val="=" />
    </div>
  );
};

export default Cal;
