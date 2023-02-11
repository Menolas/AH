import React from 'react';
import { connect } from 'react-redux/es/exports';
import {
  setCurrentPage,
  getMyClients,
  addClient,
  deleteMyClient
} from '../../../redux/myClients-reducer';
import {
  getMyClientsSelector,
  getPageSize,
  getTotalCount,
  getCurrentPage,
  getIsFetching
} from '../../../redux/myClients-selectors';
import MyClients from './MyClients';
import Preloader from '../../common/Preloader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class MyClientsAPIComponent extends React.Component {

  componentDidMount() {
    this.props.getMyClients(this.props.pageSize, this.props.currentPage);
  }

  onPageChanged = (currentPage) => {
    debugger;
    this.props.setCurrentPage(currentPage);
    this.props.getMyClients(this.props.pageSize, currentPage);
  }
  
  render = () => {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <MyClients
          myClients={this.props.myClients}
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          addClient={this.props.addClient}
          deleteMyClient={this.props.deleteMyClient}
        />
      </>
    );
  };
};
  
let mapStateToProps = (state) => {
  return {
    myClients: getMyClientsSelector(state),
    totalCount: getTotalCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getMyClients,
    addClient,
    deleteMyClient
  }),
  withAuthRedirect
)(MyClientsAPIComponent);
