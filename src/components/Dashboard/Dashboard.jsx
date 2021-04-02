import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import './Dashboard.css';
import Main from './Main';
import Sidebar from './Sidebar';
import ProductForm from './ProductForm';

const Dashboard = () => {
  const { path } = useRouteMatch();
  // eslint-disable-next-line no-console
  console.log('dashboard');
  return (
    <div className="dashboard">
      <Sidebar />
      <Switch>
        <Route path={`${path}/newProduct`}>
          <ProductForm />
        </Route>

        <Route path={`${path}`}>
          <Main />
        </Route>

      </Switch>
    </div>
  );
};

export default Dashboard;
