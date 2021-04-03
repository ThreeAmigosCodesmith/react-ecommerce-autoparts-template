import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import './Dashboard.css';
import Main from './Main';
import Sidebar from './Sidebar';
import ProductForm from './ProductForm';
import Purchases from './Purchases/Purchases';
import { useStateValue } from '../../StateProvider';

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  // eslint-disable-next-line no-console
  console.log('dashboard');

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, []);
  return (
    <div className="dashboard">
      <Sidebar />
      <Switch>
        <Route exact path="/dashboard/newProduct">
          <ProductForm />
        </Route>

        <Route exact path="/dashboard">
          <Main />
        </Route>

        <Route exact path="/dashboard/purchases">
          <Purchases />
        </Route>

      </Switch>
    </div>
  );
};

export default Dashboard;
