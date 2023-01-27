import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const Admin = (props) => {
  //debugger;
  
  return (
    <div className="admin container">
      <div className="admin__header">
        <div className="admin__view-btns">
          <NavLink 
            to="/admin/customers"
            className={({ isActive }) =>
              isActive ? "btn btn--dark-bg" : "btn btn--light-bg"}>
            Customers
          </NavLink>
          <NavLink
            to="/admin/clients"
            className={({ isActive }) =>
              isActive ? "btn btn--dark-bg" : "btn btn--light-bg"}>
            My Clients
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default compose(withAuthRedirect)(Admin);
