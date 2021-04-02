import React from 'react';
import './Dashboard.css';
import Main from './Main';
import Sidebar from './Sidebar';

const Dashboard = () => {
  // eslint-disable-next-line no-console
  console.log('dashboard');
  return (
    <div className="container">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
