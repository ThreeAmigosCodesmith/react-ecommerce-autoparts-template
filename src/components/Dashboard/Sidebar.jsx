import './Sidebar.css';
import React from 'react';

const Sidebar = () => {
  console.log('Sidebar');
  return (
    <div className="sidebar_responsive" id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <h1>Yardhop</h1>
        </div>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <a href="#test">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <a href="#test">Admin Management</a>
        </div>
        <div className="sidebar__link">
          <a href="#test">Log out</a>
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
