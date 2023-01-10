import React, { useState, useEffect } from 'react';

const UseEffect02 = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0)

  useEffect(() =>{
    setCalculation(count * 2)
  }, [count])

  return (
    <div>
      <h3>Counter App</h3>
      <button onClick={(c) => setCount((c) => c + 1)}>count</button>

      <p>Count: {count}</p>
      <p>Calculation: {calculation}</p>
    </div>
  );
};

export default UseEffect02;
