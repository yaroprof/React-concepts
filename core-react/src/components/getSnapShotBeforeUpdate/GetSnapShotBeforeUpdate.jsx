import React from 'react';

class GetSnapShotBeforeUpdate extends React.Component {
  state = {
    name: 'Name-1',
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: 'Name-2' });
    }, 2000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('prev').innerHTML = 'previous name: ' + prevState.name;
  }

  componentDidUpdate() {
    document.getElementById('new').innerHTML = 'current name: ' + this.state.name;
  }

  render() {
    return (
      <div>
        <div id="prev"></div>
        <div id="new"></div>
      </div>
    );
  }
}

export default GetSnapShotBeforeUpdate;
