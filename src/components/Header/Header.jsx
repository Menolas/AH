import React from 'react';
import SocialNav from '../SocialNav';
import MainNav from '../MainNav';
import Logo from '../Logo';
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { withRouter } from '../../hoc/withRouter';
import Sprite from '../../assets/svg/sprite.svg';

const Header = (props) => {
  //debugger;
  let index = Object.keys(props.match.params)[0];
  let headerClasses = classNames('main-header', 'container', { 'main-header--inner': props.match.params[index] });
  
  return (
    <header className = { headerClasses }>
      <Logo />
      <MainNav
        initialActiveStyle={props.initialActiveStyle}
      />
      <SocialNav />
      {props.isAuth
        ?
        <>
          <NavLink to="/admin/customers" className="main-header__admin-link">
            <svg><use href={`${Sprite}#admin`}></use></svg>
          </NavLink>
          <NavLink to="/" className="main-header__admin-link" onClick={() => { props.logout(props.userId) }}>
            <svg><use href={`${Sprite}#logout`}></use></svg>
          </NavLink>
        </>
        : 
        <NavLink to="/login" className="main-header__admin-link">
          <svg><use href={`${Sprite}#login`}></use></svg>
        </NavLink>
      }
    </header>
  );
}

export default withRouter(Header);
