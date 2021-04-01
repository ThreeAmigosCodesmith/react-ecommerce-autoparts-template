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

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>

        <Route exact path="/catalog">
          <Header />
          <Catalog />
        </Route>

        <Route exact path="/order">
          <Header />
          <Order />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/cart">
          <Header />
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
