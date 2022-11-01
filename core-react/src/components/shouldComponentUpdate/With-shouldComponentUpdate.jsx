import React, { useState } from 'react';

const WithShouldComponentUpdate = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const increase1 = () => setCounter1(counter1 + 1);
  const increase2 = () => setCounter2(counter2 + 1);

  return (
    <div>
      <div>
        <Counter1 value={counter1} onClick={increase1} />
        <Counter2 value={counter2} onClick={increase2} />
      </div>
    </div>
  );
};

class Counter1 extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.value !== this.props.value) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log('Counter1 is call');
    return (
      <div>
        <h2>Counter 1</h2>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.onClick}>Add</button>
      </div>
    );
  }
}

class Counter2 extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.value !== this.props.value) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log('Counter2 is call');
    return (
      <div>
        <h2>Counter 2</h2>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.onClick}>Add</button>
      </div>
    );
  }
}

export default WithShouldComponentUpdate;
