import React from 'react';
import { NavLink } from "react-router-dom";

const ServiceItem = (props) => {
  const Point = (props) => {
    return (
      <li>{props.text}</li>
    );
  }
 
  const conditions = props.item.conditions.map((item, i) => {
    return <Point text = { item } key = { i } />
  });
  
  return (
    <li className="services__item">
      <article className="services__article">
        <NavLink className="services__link" to="#">
          <div className="services__article-img-wrap"></div>
          <div className="services__article-text-block">
            <h4>{props.item.title}:</h4>
            <ul className="services__item-list">
              {conditions}
            </ul>
          </div>
        </NavLink>
      </article>
    </li>
  );
}

const Services = (props) => {

  const servicesArray = props.services.map(item => {
    return (
      <ServiceItem
        key={item._id}
        item={item}
      />
    );
  });

  return (
    <section className="page-block services container" id="services">
      <h2 className="page-block__title">Studio services</h2>
      <ul className="services__list list">
        { servicesArray }
      </ul>
    </section>
  );
}

export default Services;
