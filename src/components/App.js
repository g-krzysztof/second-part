import React, { Component } from 'react';
import '../css/App.css';
import Nav from './Nav';
import Display from './Display';

class App extends Component {
  state = {
    value: { label: this.props.val, value: this.props.val },
    results: [],
  }

  options = [
    { label: "London", value: "London" },
    { label: "München", value: "München" },
    // { label: "Tychy", value: "Tychy" },
    // { label: "Katowice", value: "Katowice" },
  ]

  fetchData = () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value.value}&appid=9e05c48978408e6fcb878f531b80bbad`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Wystąpił bład")
      })
      .then(response => response.json())
      .then(data => {
        const reciveData = {
          city: this.state.value.value,
          humidity: data.main.humidity,
          time: new Date().toISOString().slice(11, 16),
          temp: data.main.temp,
          key: Date.now()
        }
        let results = [...this.state.results];
        results.push(reciveData);
        // set city data to state and render view
        this.setState({ results });
      })
  }

  handleChange(value) {
    // change state: value to city name
    this.setState({ value });

    // clear interval if exist
    this.intervalClear();

    // fetch data for the set city name
    setTimeout(() => {
      this.fetchData()
      // set interval: fetch data every 10s
      this.setIntervalFetch();
    }, 0);
  }

  // placeholder for the interval - need can clear it later
  intervalFetch;

  // interval function - called at the end handleChange
  setIntervalFetch = () => {
    this.intervalFetch = window.setInterval(() => {
      this.fetchData();
    }, 10000);
  }

  // clear interval
  intervalClear = () => {
    window.clearInterval(this.intervalFetch);
  }

  // on click reset button: clear data and reset App to onload state
  handleReset = () => {
    this.setState({
      value: { label: this.props.val, value: this.props.val },
      results: []
    });
    this.intervalClear();
  }

  render() {
    return (
      <div className="App">
        <Nav
          options={this.options}
          value={this.state.value}
          onchange={value => this.handleChange(value)} />
        <button className="App__reset-btn" onClick={this.handleReset}>Reset</button>
        <Display
          results={this.state.results} />
      </div>
    );
  }
}

export default App;