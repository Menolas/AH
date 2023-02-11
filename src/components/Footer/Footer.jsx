import React from 'react';
import SocialNav from '../SocialNav';

const Footer = () => {
  return (
    <footer className="main-footer container">
      <div className="main-footer__copyrights">@ Tattoo Studio "Adelaine Hobf"</div>
      <div className="main-footer__middle-section">
        <SocialNav />
      </div>
      <div>Web Developer: Olena Christensen</div>
    </footer>
  )
}

export default Footer;
