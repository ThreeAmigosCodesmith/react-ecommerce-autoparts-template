import './Sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div id="sidebar">

    <div className="sidebar__menu">
      <div className="sidebar__link active_menu_link">
        <Link to="/dashboard">
          <p>Dashboard</p>
        </Link>
      </div>
      <div className="sidebar__link">
        <Link to="/dashboard/newProduct">
          <p>New Listing</p>
        </Link>
      </div>
      <div className="sidebar__link">
        <Link to="/dashboard/inventory">
          <p>Inventory</p>
        </Link>
      </div>
      <div className="sidebar__link">
        <Link to="/dashboard/purchases">
          <p>Purchases</p>
        </Link>
      </div>
      <div className="sidebar__link">
        <Link to="/dashboard/messages">
          <p>Messages</p>
        </Link>
      </div>
      <div className="sidebar__link">
        <Link to="/dashboard/settings">
          <p>Settings</p>
        </Link>
      </div>
    </div>
  </div>
);

export default Sidebar;
