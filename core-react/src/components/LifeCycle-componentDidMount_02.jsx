import React from 'react';

class LifeCycle02 extends React.Component {
  state = { company: 'BMW' };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ company: 'Volvo' });
    }, 2000);
  }
  render() {
    return (
      <div>
        <p>{this.state.company}</p>
      </div>
    );
  }
}

export default LifeCycle02;
