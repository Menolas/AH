import React from 'react';
import { connect } from 'react-redux/es/exports';
import { getClientProfile, updateContactField, saveClientAvatar } from '../../../redux/profile-reducer';
import Profile from './Profile';
import { withRouter } from '../../../hoc/withRouter';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.getClientProfile(this.props.match.params.profileId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.profileId !== prevProps.match.params.profileId) {
      this.props.getClientProfile(this.props.match.params.profileId);
    }
  }

  render = () => {

    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        updateContactField={this.props.updateContactField}
        saveClientAvatar={this.props.saveClientAvatar}
      />
    );
  }
};

let mapStateToProps = (state) => {
  //debugger;
  return {
    profile: state.profile.profile,
  };
};

export default compose(
  connect(mapStateToProps, { getClientProfile, updateContactField, saveClientAvatar }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
