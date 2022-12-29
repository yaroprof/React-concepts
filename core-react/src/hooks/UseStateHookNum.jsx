import React from 'react'

const UseStateHookNum = () => {

  const[number, setNumber] = React.useState(45)
  const numHandler = () =>{
    setNumber(number + 5)
  }

  return (
    <div className='wrap'>
      <button type='button' onClick={numHandler}>Encrease by 5</button>
      <div>{number}</div>
    </div>
    
  )
}

export default UseStateHookNum;