/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
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
import * as types from './redux/actions/actionTypes';

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const userRole = useSelector((state) => state.auth.userRole);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetch('/session')
      .then((res) => res.json())
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res.user.userRole);
        dispatch({ type: types.SET_USER_ROLE, payload: res.user.userRole });

        const firstName = res.user?.firstName || res.user.contactFirstName;
        const lastName = res.user?.lastName || res.user.contactLastName;
        dispatch({
          type: types.AUTH_USER,
          payload: {
            name: `${firstName} ${lastName}`,
            id: res.user?.customerID || res.user.supplierID,
            ...res.user,
          },
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const loginRoutes = (
    <>
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </>
  );

  const appRoutes = (
    <>
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
          <Route path="*">
            {userRole === 'CUSTOMER' ? <Redirect to="/" /> : <Redirect to="/dashboard" />}
          </Route>
        </Switch>
      </div>
      <div className="footer-content">
        <Footer />
      </div>
    </>
  );

  /*
    If the user is logged in, return the regular application routes.
    Otherwise only return /login and /signup
  */
  return (
    <BrowserRouter>
      <div className="App">
        {user ? appRoutes : loginRoutes}
      </div>
    </BrowserRouter>
  );
};

export default App;
