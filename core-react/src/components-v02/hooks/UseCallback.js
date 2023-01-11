import React, { useState, useEffect, useCallback } from 'react';

// Child Component
const ItemsList = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems;
    setItems(newItems);
    console.log('render');
  }, [getItems]);

  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
};

// Parents component
const UseCallback = () => {
  const [colored, setColored] = useState(true);
  const [count, setCount] = useState(0);

  const styles = {
    color: colored ? 'darked' : 'orange',
  };

  // simulation virtual API   - response number from this API
  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element: ${i + 1}`);
  }, [count]);

  return (
    <div>
      <h2 style={styles}>number of elements: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>add</button>
      <button onClick={() => setColored((prev) => !prev)}>Change</button>
      <br />
      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
};

export default UseCallback;
