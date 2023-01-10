import React, {useState, useEffect} from 'react'

const UseEffect03 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1)
    }, 1000);
    return() => clearTimeout(timer)
  }, [])

  return (
    <div>
    <h3>Clean Up option</h3>
    <p>Count: {count}</p>

    </div>
  )
}

export default UseEffect03