import React, { Component } from "react";
import moment from "moment";
import "./App.css";

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
        <h1>Yard Hopping</h1>
        <p>{ moment(date).format("MMMM Do YYYY") }</p>
      </div>
    );
  }
}

export default App;
