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
    { label: "Tychy", value: "Tychy" },
    { label: "Katowice", value: "Katowice" },
  ]

  handleChange(value) {
    // first setState: change a value to city name
    this.setState({ value });

    // fetch data for the set city name
    setTimeout(() => {
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
          console.log(data);
          const reciveData = {
            city: this.state.value.value,
            humidity: data.main.humidity,
            time: new Date().toISOString().slice(11, 16),
            temp: data.main.temp,
            key: Date.now()
          }
          let results = [...this.state.results];
          results.push(reciveData);
          // second setState: set city data to state and render view
          this.setState({ results });
        })
    }, 0);
  }

  render() {
    return (
      <div className="App">
        <Nav
          options={this.options}
          value={this.state.value}
          onchange={value => this.handleChange(value)} />
        <Display
          results={this.state.results} />
      </div>
    );
  }
}

export default App;