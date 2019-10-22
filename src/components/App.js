import React, { Component } from 'react';
import '../css/App.css';
import Nav from './Nav';
import Display from './Display';

class App extends Component {
  state = {
    value: { label: this.props.val, value: this.props.val },
  }

  options = [
    { label: "London", value: "London" },
    { label: "München", value: "München" },
    { label: "Tychy", value: "Tychy" },
    { label: "Katowice", value: "Katowice" },
  ]

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div className="App">
        <Nav
          options={this.options}
          value={this.state.value}
          onchange={value => this.handleChange(value)} />
        <Display />
      </div>
    );
  }
}

export default App;