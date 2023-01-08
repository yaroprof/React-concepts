import React, { useState } from 'react';

const CounterEvents = () => {
  const [counter, setCounter] = useState(0);

  const handlerCounter = () => {
    setCounter(counter + 1);
  };

  return <button onClick={handlerCounter}>Count: {counter}</button>;
};

export default CounterEvents;
