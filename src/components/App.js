import React, { Component } from 'react';
import '../css/App.css';
import Nav from './Nav';
import Display from './Display';

class App extends Component {
  state = {

  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Display />
      </div>
    );
  }
}

export default App;