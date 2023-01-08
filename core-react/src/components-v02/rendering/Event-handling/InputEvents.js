import React from 'react';

const InputEvents = () => {
  const [text, setText] = React.useState('');
  const onchangeText = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h3>Input text</h3>
      <input onChange={onchangeText} value={text} type="text" />
      {/* <br />
      {text} */}
    </div>
  );
};

export default InputEvents;
