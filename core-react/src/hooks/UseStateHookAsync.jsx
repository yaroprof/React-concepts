import React, { useState } from 'react';

const UseStateHookAsync = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };
  const handleDecrease = () => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  };
  return (
    <div className="wrap">
      Count: {count}
      <div>
        <button type="button" onClick={handleIncrease}>
          Increase
        </button>
        <button type="button" onClick={handleDecrease}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default UseStateHookAsync;
