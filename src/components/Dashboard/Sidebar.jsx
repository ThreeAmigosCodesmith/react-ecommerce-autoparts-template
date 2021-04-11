import './Sidebar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  activeMenuLink: {
    background: 'rgba (62, 161, 117, 0.3)',
    color: '#3ea175',
  },
};

const Sidebar = () => (
  <div id="sidebar">
    {/* apply active_menu_link to currently selected page */}
    <div className="sidebar__menu">
      <div className="sidebar__link">
        <NavLink activeStyle={styles.activeMenuLink} exact to="/dashboard">
          <p>Dashboard</p>
        </NavLink>
      </div>
      <div className="sidebar__link">
        <NavLink activeStyle={styles.activeMenuLink} exact to="/dashboard/newProduct">
          <p>New Listing</p>
        </NavLink>
      </div>
      <div className="sidebar__link">
        <NavLink activeStyle={styles.activeMenuLink} exact to="/dashboard/inventory">
          <p>Inventory</p>
        </NavLink>
      </div>
      <div className="sidebar__link">
        <NavLink activeStyle={styles.activeMenuLink} exact to="/dashboard/purchases">
          <p>Purchases</p>
        </NavLink>
      </div>
      <div className="sidebar__link">
        <NavLink activeStyle={styles.activeMenuLink} exact to="/dashboard/messages">
          <p>Messages</p>
        </NavLink>
      </div>
      <div className="sidebar__link">
        <NavLink activeStyle={styles.activeMenuLink} exact to="/dashboard/settings">
          <p>Settings</p>
        </NavLink>
      </div>
    </div>
  </div>
);

export default Sidebar;
