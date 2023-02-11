import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux/es/exports';
import { getServices } from '../../redux/mainPage-reducer';
import Services from './Services';

class ServiceContainer extends React.Component {
  debugger;

  componentDidMount() {
    this.props.getServices();
  }

  render = () => {
    return (
      <Services
        services={this.props.services}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    services: state.mainPage.services,
  };
};

export default connect(mapStateToProps, {getServices})(ServiceContainer);
