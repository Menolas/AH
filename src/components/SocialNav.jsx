import React from 'react';
import Sprite from '../assets/svg/sprite.svg';

const SocialNav = (props) => {
  return (
    <nav className="social-nav">
      <ul className="social-nav__list">
        <li className="social-nav__item">
          <a className="social-nav__link" href="https://www.instagram.com/adelainehobf/">
            <span><svg><use href={`${Sprite}#instagram`}></use></svg></span>
            Instagram
          </a>
        </li>
        <li className="social-nav__item">
          <a className="social-nav__link" href="https://www.facebook.com/a.hobf">
            <span><svg><use href={`${Sprite}#facebook`}></use></svg></span>
            Messenger
          </a>
        </li>
        <li className="social-nav__item">
          <a className="social-nav__link" href="tel:+4745519015">
            <span><svg><use href={`${Sprite}#phone`}></use></svg></span>
            Facebook
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default SocialNav;