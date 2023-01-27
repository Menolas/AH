import React from "react";
import PreloaderImg from '../../assets/img/PreloaderImg.svg';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={PreloaderImg} alt="" />
    </div>
  )
}

export default Preloader;
