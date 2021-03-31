import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Order from './components/Order/Order';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Checkout from './components/Checkout/Checkout';

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
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
          <p>{ moment(date).format('MMMM Do YYYY') }</p>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
