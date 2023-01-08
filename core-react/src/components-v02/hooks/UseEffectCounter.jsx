import React, {useState, useEffect} from 'react';

const UseEffectCounter = () =>{
  const [count, setCount] = useState(0)
  useEffect(() =>{
    setTimeout(() => {
      setCount((count) => count + 1)
    }, 1000);
  })
  return(
    <div>{count}</div>
  )
}

export default UseEffectCounter