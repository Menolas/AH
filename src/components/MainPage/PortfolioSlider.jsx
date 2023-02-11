import React from "react";
import { connect } from 'react-redux/es/exports';
import SliderItems from "./SliderItems";
import { getTattooStyles, setActiveStyle } from '../../redux/portfolio-reducer';

class PortfolioSlider extends React.Component {

  componentDidMount() {
    this.props.getTattooStyles();
  }
  
  render = () => {

    return (
      <SliderItems
        tattooStyles={this.props.tattooStyles}
        setActiveStyle={this.props.setActiveStyle}
      />
    );
  }
}


let mapStateToProps = (state) => {
  return {
    tattooStyles: state.portfolio.tattooStyles,
  };
};

export default connect(mapStateToProps, { getTattooStyles, setActiveStyle })(PortfolioSlider);
