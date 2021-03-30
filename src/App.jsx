import React, { Component } from 'react';
import moment from 'moment';
import './components/styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Order from './components/Order';
import Cart from './components/Cart';

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
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/catalog" component={Catalog} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
          <p>{ moment(date).format('MMMM Do YYYY') }</p>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
