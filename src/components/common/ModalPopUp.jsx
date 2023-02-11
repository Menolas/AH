import React from "react";

const ModalPopUp = ({closeModal, children}) => {
  return (
    <div className="modal-wrap">
      <div className="modal-wrap__inner-block">
        <button
          className="close-button modal-wrap__close-btn"
          onClick={closeModal}
        >
        </button>
        {children}
      </div>
    </div>
  )
}

export default ModalPopUp;
