import React from "react";
import { connect } from 'react-redux/es/exports';
import { getFaqItems } from "../../redux/mainPage-reducer";
import FaqItems from "./FaqItems";

class Faq extends React.Component {

  componentDidMount() {
    this.props.getFaqItems();
  }

  render = () => {
    return (
      <section className="page-block faq container" id="faq">
        <h2 className="page-block__title">F.A.Q</h2>
        <FaqItems
          faq={this.props.faq}
          faqActive={this.props.faqActive}
        />
      </section>
    );
  }
}


let mapStateToProps = (state) => {
  return {
    faq: state.mainPage.faq,
    faqActive: state.mainPage.faqActive,
  }
}

export default connect(mapStateToProps, { getFaqItems })(Faq);
