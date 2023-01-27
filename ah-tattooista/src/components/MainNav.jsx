import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MainNav =(props) => {
  let [mainNavMenuModal, setMainMenu] = useState(false);
  let [mainNavClasses, setMainNavClasses] = useState('main-nav');

  const mainNavList = [
    {
      text: 'Portfolio',
      url: './portfolio/',
    },
    {
      text: 'Tattoo Artist',
      url: './portfolio',
    },
    {
      text: 'Studio Services',
      url: './#services',
    },
    {
      text: 'F.A.Q',
      url: './#faq',
    },
    {
      text: 'Booking',
      url: './#booking',
    },
    {
      text: 'Contacts',
      url: './#contacts',
    },
  ];

  const openMenu = () => {
    if (!mainNavMenuModal) {
      setMainMenu(true);
      setMainNavClasses('main-nav shown');
    } else {
      setMainMenu(false);
      setMainNavClasses('main-nav');
    }
  };

  const closeMenu = () => {
    setMainMenu(false);
    setMainNavClasses('main-nav');
  };

  const mainNavItems = mainNavList.map((item, i) => {
    return (
      <li className = "main-nav__item" key = { i }>
        <NavLink
          to = { item.url }
          className = "main-nav__link"
          onClick = { closeMenu }>
          { item.text }
        </NavLink>
      </li>
    )
  });

  return (
    <nav className={ mainNavClasses } >
      <div
        className="hamburger"
        onClick={ openMenu }>
        <span></span>
      </div>
      <ul className="list main-nav__list">
        <li className = "main-nav__item">
          <NavLink
              to = "./portfolio"
              className = "main-nav__link"
              onClick = { closeMenu }>
            Portfolio
          </NavLink>
        </li>
        <li className = "main-nav__item">
          <HashLink
              to = "./#services"
              className = "main-nav__link"
              onClick = { closeMenu }>
            Studio Services
          </HashLink>
        </li>
        <li className = "main-nav__item">
          <HashLink
              to = "./#faq"
              className = "main-nav__link"
              onClick = { closeMenu }>
            F.A.Q
          </HashLink>
        </li>
        <li className = "main-nav__item">
          <HashLink
              to = "./#bookingSection"
              className = "main-nav__link"
              onClick = { closeMenu }>
            Booking
          </HashLink>
        </li>
        <li className = "main-nav__item">
          <HashLink
              to = "./#contacts"
              className = "main-nav__link"
              onClick = { closeMenu }>
            Contacts
          </HashLink>
        </li>
      </ul>
    </nav>
  );

};

export default MainNav;
