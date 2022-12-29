import React from 'react'

const UseStateHookChangeNum = () => {

  const [count, setCount] = React.useState(0)
  const changeIncrease = () =>{
    setCount(count + 1)
  }
  const changeDecrease = () =>{
    setCount(count - 1)
  }

  return (
    <div className="wrap">
      <button type='button' onClick={changeIncrease}>Increase by 1</button>
      <button type='button' onClick={changeDecrease}>Decreade by 1</button>
      <div>{count}</div>
    </div>
  )
}

export default UseStateHookChangeNum