import React, {useState} from 'react';

const FunctionProp03 = (props) => {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    props.onChange(inputValue);
  }
  return (
    <div>
      <label>Enter a value: </label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
};

export default FunctionProp03;
