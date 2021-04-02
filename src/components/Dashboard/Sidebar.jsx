import './Sidebar.css';
import React from 'react';

const Sidebar = () => {
  // eslint-disable-next-line no-console
  console.log('Sidebar');
  return (
    <div id="sidebar">

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <a href="/dashboard">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <a href="#test">Admin Management</a>
        </div>
        <div className="sidebar__link">
          <a href="/dashboard/newProduct">List a New Product</a>
        </div>
        <div className="sidebar__link">
          <a href="#test">Log out</a>
        </div>
        <h2>LEAVE</h2>
        <div className="sidebar__link">
          <a href="#test">Log out</a>
        </div>
        <div className="sidebar__link">
          <a href="#test">Log out</a>
        </div>
        <div className="sidebar__logout">
          <a href="#test">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
