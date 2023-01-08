import React from 'react';

const CounterEvents01 = () => {
  const [count, setCount] = React.useState(0);
  const handleCount = (event, delta) => {
    setCount(count + delta);
  };

  return (
    <div>
      Counter: {count}
      <button type="button" onClick={(event) => handleCount(event, 1)}>
        + 1
      </button>
      <button type="button" onClick={(event) => handleCount(event, -1)}>
        {' '}
        - 1
      </button>
    </div>
  );
};

export default CounterEvents01;
