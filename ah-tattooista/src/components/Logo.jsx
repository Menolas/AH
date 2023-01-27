import React from 'react';
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className = "logo">
      <NavLink to="/" className = "logo__link"></NavLink>
      <span className = "logo__text">Adelaine<br />Hobf</span>
    </div>
  )
}

export default Logo;
