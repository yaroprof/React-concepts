import React from 'react';

// pass a parameter to an event handler or callback?

class PassParam extends React.Component {
  handleClick = (id) => {
    console.log('This number is: ', 45);
  };
  render() {
    return <button onClick={(id) => this.handleClick(id)}>clik here</button>;
  }
}

export default PassParam;
