import React from 'react';

// Bind Metods to Constructor

class Bind extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Clicked');
  }
  render() {
    // return <button onClick={this.handleClick}>Click Me</button>;
    return <button onClick={() => this.handleClick()}>Click Me</button>;
  }
}
export default Bind;
