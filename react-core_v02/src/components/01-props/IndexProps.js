import React, { useState } from 'react';
import ChildrenProp01 from './ChildrenProp01';
import ChildrenProp02 from './ChildrenProp02';
import ChildrenProp03 from './ChildrenProp03';
import FunctionProp04 from './FunctionProp04';
import FunctionProp03 from './FunctionProp03';
import FunctionProp02 from './FunctionProp02';
import ObjectProp01 from './ObjectProp01';

const IndexProps = () => {
  // 01 - Pass an Object prop
  // const person = { name: 'Peter', age: 33 };

  // --- for Functions props:

  // 02 - Pass a callback function as a prop from a parent component to a child component, and call it when a button is clicked in the child component: */
  // function handleClick() {
  //   console.log('Button clicked');
  // }

  // 03 - Pass a function that takes an argument as a prop from a parent component to a child component, and call it with a value from the child component:
  // function handleValueChange(value) {
  //   console.log(`Value changed to ${value}`);
  // }

  // 04- Pass a function that returns a value as a prop from a parent component to a child component, and use the returned value in the child component:
  // function getMessage() {
  //   console.log('Hello from parent component');
  // }

  // --- for Children props:
  // -01 Basic children prop

  //- 02 Conditional rendering using children prop/ The children prop can also be used for conditional rendering of child components.
  // const isVisible = true;

  // - 03 Passing a function as a children prop.
  // The children prop can also be used to pass a function as a prop. This can be useful when a component needs to render something based on the state of its parent component.
  const [isVisible, setVisible] = useState(false);
  function handleClick() {
    setVisible(!isVisible);
  }

  return (
    <div>
      {/* - 01 */}
      {/* <ObjectProp01 person={person} /> */}
      {/* - 02 */}
      {/* <FunctionProp02 onClick={handleClick} /> */}
      {/* - 03 */}
      {/* <FunctionProp03 onChange={handleValueChange} /> */}
      {/* - 04 */}
      {/* <FunctionProp04 getMessage={getMessage} /> */}

      {/* - 01   */}
      {/* <ChildrenProp01>
        <h1>Helli world</h1>
        <p>this is my react-component</p>
      </ChildrenProp01> */}

      {/* - 02   */}
      {/* <ChildrenProp02 isVisible={isVisible}>
        <h1>Hello world</h1>
        <p>this is my react-component</p>
      </ChildrenProp02> */}

      {/* - 03   */}
      <button onClick={handleClick}>Toggle Visibility</button>

      <ChildrenProp03>{isVisible => isVisible ? <h1>Hello world</h1> : null}</ChildrenProp03>
    </div>
  );
};

export default IndexProps;
