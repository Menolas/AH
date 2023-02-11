const SHOW_BOOKING_MODAL = 'SHOW_BOOKING_MODAL';
const CLOSE_BOOKING_MODAL = 'CLOSE_BOOKING_MODAL';
const SHOW_SUCCESS_MODAL = 'SHOW_SUCCESS_MODAL';
const CLOSE_SUCCESS_MODAL = 'CLOSE_SUCCESS_MODAL';

let initialState = {
  bookingModal: false,
  successModal: false
}

const modalReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case SHOW_BOOKING_MODAL:

      return {
        ...state,
        bookingModal: true,
      };
    
    case CLOSE_BOOKING_MODAL:

      return {
        ...state,
        bookingModal: false,
      };
    
    case SHOW_SUCCESS_MODAL:
      return {
        ...state,
        successModal: true,
      };
    
    case CLOSE_SUCCESS_MODAL:

      return {
        ...state,
        successModal: false,
      }
    
    default: return {
      ...state
    };
  }
}

export const showBookingModal = () => (
  {
    type: SHOW_BOOKING_MODAL,
  }
);

export const closeBookingModal = () => (
  {
    type: CLOSE_BOOKING_MODAL,
  }
);

export const showSuccessModal = () => (
  {
    type: SHOW_SUCCESS_MODAL,
  }
);

export const closeSuccessModal = () => (
  {
    type: CLOSE_SUCCESS_MODAL,
  }
);

export default modalReducer;
