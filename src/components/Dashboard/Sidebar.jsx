import './Sidebar.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Sidebar = () => {
  const history = useHistory();

  const logOutButton = (event) => {
    event.preventDefault();
    fetch('/api/verify', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) history.push('/');
    });
  };

  return (
    <div id="sidebar">

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <a href="/dashboard">Dashboard</a>
        </div>
        <div className="sidebar__link">
          <a href="/dashboard/newProduct">New Listing</a>
        </div>
        <div className="sidebar__link">
          <a href="/inventory">Inventory</a>
        </div>
        <div className="sidebar__link">
          <a href="/purchases">Purchases</a>
        </div>
        <div className="sidebar__link">
          <a href="/messages">Messages</a>
        </div>
        <div className="sidebar__link">
          <a href="/settings">Settings</a>
        </div>
        <div className="sidebar__logout">
          <a href="/" type="button" onClick={(e) => logOutButton(e)}>Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
