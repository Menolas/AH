import React from 'react';
import MainOffer from './MainOffer';
import PortfolioSlider from './PortfolioSlider';
import About from './About';
import ServiceContainer from './ServiceContainer';
import FaqContainer from './FaqContainer';
import Booking from './Booking';

const MainPage = (props) => {
  
  return (
    <main className="site-main">
      <MainOffer />
      <PortfolioSlider />
      <About />
      <ServiceContainer />
      <FaqContainer />
      <Booking />
    </main>
  )
}

export default MainPage;
