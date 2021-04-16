/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
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

const App = () => {
  const user = useSelector((state) => state.auth.user);

  const loginRoutes = (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </div>
    </BrowserRouter>
  );

  const appRoutes = (
    <BrowserRouter>
      <div className="App">
        <div className="header-content">
          <Header />
        </div>
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/stripe" component={Stripe} />
            <Route exact path="/catalog" component={Catalog} />
            <Route exact path="/order" component={Order} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/stripe" component={Stripe} />
          </Switch>
        </div>
        <div className="footer-content">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );

  /*
    If the user is logged in, return the regular application routes.
    Otherwise only return /login and /signup
  */
  return user ? appRoutes : loginRoutes;
};

export default App;
