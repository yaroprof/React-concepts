import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'green' };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({color: 'tomato'})
    }, 2000);
  }
  render() {
    return (
      <div>
        <p
          style={{
            color: this.state.color,
          }}>
          Text example
        </p>
      </div>
    );
  }
}

export default LifeCycle;
