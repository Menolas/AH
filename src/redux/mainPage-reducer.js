import { faqAPI } from "../api/faqApi";
import { serviceAPI } from "../api/serviceApi";

const SET_FAQ_ITEMS = 'SET_FAQ_ITEMS';
const SET_SERVICES = 'SET_SERVICES';

let initialState = {
  faq: [],
  services: [],
}

const mainPageReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case SET_FAQ_ITEMS:
      return {
        ...state,
        faq: action.faqItems
      };
    case SET_SERVICES:
      return {
        ...state,
        services: action.services
      };
    
    default: return {
      ...state,
    };
  }
};

// action creators

export const setFaqItems = (faqItems) => (
  {
    type: SET_FAQ_ITEMS, faqItems
  }
);

export const setServices = (services) => (
  {
    type: SET_SERVICES, services
  }
);

// thunks

export const getFaqItems = () => async (dispatch) => {
  try {
    let response = await faqAPI.getFaqItems();
    dispatch(setFaqItems(response.data));
  } catch (e) {
    console.log(e);
  }
}

export const getServices = () => async (dispatch) => {
  try {
    let response = await serviceAPI.getServices();
    dispatch(setServices(response.data));
  } catch (e) {
    console.log(e);
  }
}

export default mainPageReducer;
