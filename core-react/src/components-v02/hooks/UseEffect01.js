import React, { useState, useEffect } from 'react';

const UseEffect01 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h3>Timer App</h3>
      <h3>{count}</h3>
    </div>
  );
};

export default UseEffect01;
