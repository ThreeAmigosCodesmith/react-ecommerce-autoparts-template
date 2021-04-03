import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import './Dashboard.css';
import Main from './Main';
import Sidebar from './Sidebar';
import ProductForm from './ProductForm';
import { useStateValue } from '../../StateProvider';

const Dashboard = () => {
  const { path } = useRouteMatch();
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
