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
import { useStateValue } from '../../StateProvider';

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
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

      </Switch>
    </div>
  );
};

export default Dashboard;
