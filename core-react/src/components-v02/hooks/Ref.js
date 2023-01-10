import { render } from '@testing-library/react';
import React, { useState, useEffect, useRef } from 'react';

// let renderCount = 1;

const Ref = () => {
  const [name, setName] = useState('Yaroslav');
  const renderCount = useRef(1);
  // take current DOM element
  const inputRef = useRef(null);
  // take element from a previous rendering
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current++;
    // console.log(inputRef.current);
  });
  // take - focus from DOM element
  const focus = () => inputRef.current.focus();

  useEffect(() => {
    prevValue.current = name;
  }, [name]);

  return (
    <div>
      <input ref={inputRef} value={name} type="text" onChange={(e) => setName(e.target.value)} />
      {/* take focus from button */}
      <button className="btn btn-success" onClick={focus}>
        Focus
      </button>

      <div>My name is {name}</div>
      <div>I rendered: {renderCount.current}</div>
      <div>Previous state: {prevValue.current}</div>
      {/* <div>I rendered {renderCount.current}</div> */}
    </div>
  );
};

export default Ref;
