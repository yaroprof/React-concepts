import React, {useState, useEffect} from 'react';

const UseEffectCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() =>{
    let timer = setTimeout(() => {
      setCount((count) => count + 1)
    }, 1000);
    return() => clearTimeout(timer)
  }, [])

  
  return <h1>{count}</h1>
}

export default UseEffectCounter