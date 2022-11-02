import React from 'react';
// HOC take OriginalComponent and makes the new component - copy
const HOC = (OriginalComponent) => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent name="Arnold" />;
    }
  }
  return NewComponent;
};

class HighOrderComponents extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default HOC(HighOrderComponents);
