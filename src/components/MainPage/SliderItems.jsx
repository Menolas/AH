import React from "react";
import { NavLink } from "react-router-dom";

const SliderItems = (props) => {
  //debugger;

  const items = props.tattooStyles.map((item) => {
    return (
        <li
            key={item._id}
            className="portfolio-slider__item"
            style={{ backgroundImage: `url("/gallery/${item.wallPaper}")` }}
            onClick={() => { props.setActiveStyle(item) }}
        >
          <NavLink
              to='/portfolio/'
              className="portfolio-slider__link"
          >
            <h3 className="portfolio-slider__item-title">
              {item.value}
            </h3>
          </NavLink>
        </li>
    );
  });

  return (
    <section className="page-block portfolio-slider container">
      <h2 className="page-block__title">Portfolio</h2>
      <div className="handlers__elements portfolio-slider__handlers">
        <span className="handlers__left-arrow"></span>
        <span className="handlers__right-arrow"></span>
      </div>
      <div className="handlers portfolio-slider__list-wrap">
        <ul className="portfolio-slider__list">
          {items}
        </ul>
      </div>
    </section>
  );
};

export default SliderItems;
