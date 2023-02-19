import { render } from '@testing-library/react';
import React from 'react';

class ComponentOne extends React.Component {
  componentWillUnmount() {
    alert('The component is going to be unmounted');
  }
  render() {
    return <h1>Hello Geeks</h1>;
  }
}
class ComponentWillUnmount extends React.Component {
  state = { display: true };
  delete = () => this.setState({ display: false });

  render() {
    let comp;
    if (this.state.display) {
      comp = <ComponentOne />;
    }
    return (
      <div>
        {comp}
        <button onClick={this.delete}>Delete component</button>
      </div>
    );
  }
}

export default ComponentWillUnmount;
