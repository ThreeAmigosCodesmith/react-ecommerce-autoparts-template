// import React from 'react';
import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useHistory,
  Redirect,
} from 'react-router-dom';
import './Dashboard.css';
import { useSelector } from 'react-redux';
import Main from './Main';
import Sidebar from './Sidebar';
import ProductForm from './ProductForm';
import Purchases from './Purchases/Purchases';
import Inventory from './Inventory/Inventory';
import Messages from './Messages/Messages';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const userRole = useSelector((state) => state.auth.userRole);
  const history = useHistory();

  const customerRoutes = (
    <>
      <Route exact path="/dashboard/purchases" component={Purchases} />
      <Route exact path="/dashboard/messages" component={Messages} />
      <Route>
        <Redirect to="/dashboard/purchases" />
      </Route>
    </>
  );

  const ownerRoutes = (
    <>
      <Route exact path="/dashboard" component={Main} />
      <Route exact path="/dashboard/newProduct" component={ProductForm} />
      <Route exact path="/dashboard/inventory" component={Inventory} />
      <Route exact path="/dashboard/purchases" component={Purchases} />
      <Route exact path="/dashboard/messages" component={Messages} />
    </>
  );

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <Switch>
        {userRole === 'CUSTOMER' ? customerRoutes : ownerRoutes}
      </Switch>
    </div>
  );
};

export default Dashboard;
