import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Order from './components/Order/Order';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Cart from './components/Cart/Cart';
import Dashboard from './components/Dashboard/Dashboard';
import Stripe from './components/Stripe/Stripe';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div className="header-content">
            <Header />
          </div>
          <div className="main-content">
            <Home />
          </div>
        </Route>

        <Route exact path="/catalog">
          <div className="header-content">
            <Header />
          </div>
          <div className="main-content">
            <Catalog />
          </div>
        </Route>

        <Route exact path="/order">
          <div className="header-content">
            <Header />
          </div>
          <div className="main-content">
            <Order />
          </div>
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route path="/dashboard">
          <div className="header-content">
            <Header />
          </div>
          <div className="main-content">
            <Dashboard />
          </div>
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/cart">
          <div className="header-content">
            <Header />
          </div>
          <div className="main-content">
            <Cart />
          </div>
        </Route>

        <Route exact path="/stripe">
          <div className="header-content">
            <Header />
          </div>
          <div className="main-content">
            <Stripe />
          </div>
        </Route>
      </Switch>
      <div className="footer-content">
        <Footer />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
