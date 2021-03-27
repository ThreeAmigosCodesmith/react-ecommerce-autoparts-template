import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    const { date } = this.state;
    return (
      <div className="App">
        <h1>YardHop</h1>
        <p>{ moment(date).format('MMMM Do YYYY') }</p>
      </div>
    );
  }
}

export default App;
