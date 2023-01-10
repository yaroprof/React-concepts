import React from 'react';

const UseStateHookText = () => {
 const {text, setText} = React.useState('Hello')
 const textHandler = event =>{
  setText(event.target.value)
 }
  return(
    <div className="wrap">
      <input type="text" value={text} onChange={textHandler} />
      <p>{text}</p>
    </div>
  )
  }
export default UseStateHookText
