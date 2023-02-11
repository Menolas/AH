import React, { useState } from "react";

const FaqItem = (props) => {
  let [faqItemClasses, setFaqItemClasses] = useState('faq__item');

  const showFaqItemText = () => {
    setFaqItemClasses('faq__item shown');
  }

  const hideFaqItemText = () => {
    setFaqItemClasses('faq__item');
  }
  
  return (
    <li
      className={faqItemClasses}
      data={props.data}
      onMouseOver={() => { showFaqItemText() }}
      onMouseOut={() => { hideFaqItemText() }}
    >
      <div className="faq__item-header">
        <span className="faq__item-handle"></span>
        <h5 className="faq__item-title">
          {props.faqItem.question}
        </h5>
      </div>
      <p className="faq__item-text">
        {props.faqItem.answer}
      </p>
    </li>
  );
};

const FaqItems = (props) => {

  const faqItemsArray = props.faq.map(item => {
    return (
      <FaqItem
        key={item._id}
        faqItem={item}
      />
    );
  });

  return (
    <ul className="faq__list list">
      {faqItemsArray}
    </ul>
  );
};

export default FaqItems;
