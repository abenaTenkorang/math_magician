import React, { useState } from 'react';
import Keys from './keys';
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
};
export default Cal;
