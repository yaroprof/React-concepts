import React, { useState, useEffect, useRef } from 'react';

const Ref1 = () => {
  const [text, setText] = useState('');
  const renderCount = useRef(1);
  const previousInputValue = useRef('');

  useEffect(() => {
    renderCount.current++;
  });

  // previous changes
  useEffect(() => {
    previousInputValue.current = text;
  }, [text]);

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <h4>Input Text: {text}</h4>
      <hr />
      <h4>Number of rendering: {renderCount.current} </h4>
      <h4>Previous Text: {previousInputValue.current} </h4>
    </div>
  );
};

export default Ref1;
