import React from 'react';
import { connect } from 'react-redux/es/exports';
import { logout } from '../../redux/auth-reducer';
import Header from './Header';

const HeaderContainer = (props) => {
  return <Header {...props} />
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    initialActiveStyle: state.portfolio.initialActiveStyle
  };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);
