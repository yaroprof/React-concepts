import React, { useState, useMemo, useEffect } from 'react';

const App = () => {
  const complexCompute = (num) => {
    console.log('complexCompute');
    let i = 0;
    while (i < 100000000) i++;
    return num * 2;
  };

  const [number, setNumber] = useState(0);
  const [colored, setColor] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? 'orange' : 'white',
    }),
    [colored],
  );

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log('Styles changed');
  }, [styles]);

  return (
    <>
      <h3 style={styles}>Count: {computed} </h3>
      <button onClick={() => setNumber((prev) => prev + 1)}>add</button>
      <button onClick={() => setNumber((prev) => prev - 1)}>minus</button>
      <button onClick={() => setColor((prev) => !prev)}>Change</button>
    </>
  );
};

export default App;
