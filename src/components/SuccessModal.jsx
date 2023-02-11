import React from 'react';
import { connect } from 'react-redux/es/exports';
import { closeSuccessModal } from '../redux/modal-reducer';

const SuccessModal = (props) => {
  if (props.successModal) {
    return (
      <div className="modal-wrap">
        <div className="success">
          <button
            className="close-button"
            onClick={props.closeSuccessModal}></button>
          <div>
            <h2>This is Success!!</h2>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    successModal: state.modal.successModal,
  };
}

export default connect(mapStateToProps, {closeSuccessModal})(SuccessModal);


