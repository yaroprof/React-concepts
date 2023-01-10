import React, { useState} from 'react';
import Todos from './Todos';

// Parrent component
const UseCallBack01 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  }; 
  const addTodo = () => {
    setTodos((t) => [...t, 'New Todo']);
  };
  return (
    <div>
      <h3>useCallback- hook</h3>
      <button onClick={increment}>Adding</button>
      <p>Counter: {count}</p>
      <hr />
      <Todos todos={todos} addTodo={addTodo} />
    </div>
  );
};

export default UseCallBack01;
