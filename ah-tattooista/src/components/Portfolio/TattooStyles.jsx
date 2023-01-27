import React from 'react';
import classNames from "classnames";

const TattooStylesItem = (props) => {
  let itemClasses = "tattoo-style__item";
  if (props.activeStyle) {
    itemClasses = classNames('tattoo-style__item', { 'active': props.activeStyle._id === props.item._id });
  }
    
  return (
    <li
      className={itemClasses}
      onClick={() => {props.changeActiveStyle(props.item)}}
    >
      {props.item.value}
    </li>
  );
}

const TattooStyles = (props) => {
  //debugger;
  const tattooStylesArray = props.tattooStyles
    .map((item) => {
      return (
        <TattooStylesItem
          key={item._id}
          item={item}
          activeStyle={props.activeStyle}
          changeActiveStyle={props.changeActiveStyle}
        />
      );
    });
  
  return (
    <section className="tattoo-style page-block container">
      <ul className="tattoo-style__list list">
        {tattooStylesArray}
      </ul>
      <div className="tattoo-style__item-content">
        <h2 className="title title--secondary page-block__title tattoo-style__title">
          {props.activeStyle ? props.activeStyle.value : "---"}
        </h2>
        <div className="tattoo-style__text">
          {props.activeStyle ? props.activeStyle.description : "---"}
        </div>
      </div>
    </section>
  );
}

export default TattooStyles;
