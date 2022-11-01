import React from 'react';

class ComponentDidUpdate extends React.Component {
  state = {
    agentName: 'Bond',
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ agentName: 'James Bond' });
    }, 3000);
  }
  componentDidUpdate() {
    document.getElementById('person').innerHTML = '->' + this.state.agentName;
  }

  render() {
    return (
      <div>
        <h3>
          My name is: {this.state.agentName}
          <br />
          <div id="person"></div>
        </h3>
      </div>
    );
  }
}

export default ComponentDidUpdate;
