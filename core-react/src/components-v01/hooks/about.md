># use React State
One of the most crucial React concepts to understand is state. Your React application lives and breathes state. Due of the user's ability to engage with your application, it expands beyond the scope of static material provided on a website. Every time a user interacts with your program, the underlying state may change, changing the UI that state represents.
> A frontend application's user interface (UI) is a representation of its state. State is only an instant in time. When a user interacts with your application and changes their state, the UI may then appear entirely different since it now represents the current state rather than the previous one.

> A state can refer to several things:
> 1) A boolean indicates to the user interface whether a dialog or modal popover is open or closed.
> 2) A user object represents the person who is logged in to the program.
> 3) Data that React fetches from a remote API and displays in your UI, such as an object or list of people.

> Any one of these states could be controlled by a single React component, which primarily performs the following three tasks:

>1) preserving the state
>2) giving the user the ability to change the state
>3) UI updating once the state has changed.

<br>

*The useState hook accepts an initial state as an argument when rendering a React component for the first time, and it returns an array with two values: the current state and the function used to change the state. While your React component uses the current state to display it someplace, the state update function is used to modify the current state (e.g. HTML button onClick).*

```
const UseStateHook = () => {

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
export default UseStateHook
```
<br>

*It can also be used to store more of the dynamic state of an input HTML element while typing into it, taking it a step further than just using it to increment an integer. The fact that the input HTML element accepts the current state as its value transforms it into a controlled component or element. Now, React's state management controls the state rather than internal HTML:*

```
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
```
<br>
<br>

### Another useState - examples:

```
<!-- Increase - Decrease value -->

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

```

### ASYNCHRONOUS STATE IN REACT

>What happens if you rely on the current state to update the state? Let's use the following scenario as an example where we are using the setTimeout function built within JavaScript to delay the state update:

```
const UseStateHookAsync = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };
  const handleDecrease = () => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  };
  return (
    <div className="wrap">
      Count: {count}
      <div>
        <button type="button" onClick={handleIncrease}>
          Increase
        </button>
        <button type="button" onClick={handleDecrease}>
          Decrease
        </button>
      </div>
    </div>
  );
};
```


<br>
<br>
<br>

***

># useEffect

>useEffect  perform side effects in your components with the useEffect Hook.
**Timers, data fetching, and direct DOM updates** are a few instances of side effects.
Two arguments are accepted by useEffect. Optional: The second parameter.
```
useEffect(<function>, <dependency>)
```







<br>
<br>
<br>

***

># useReducer