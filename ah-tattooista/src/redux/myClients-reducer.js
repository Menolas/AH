import { clientsAPI } from '../api/clientApi';
import { showSuccessModal } from './modal-reducer';

const SET_MY_CLIENTS = 'SET_MY_CLIENTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_MY_CLIENTS_COUNT = 'SET_TOTAL_CUSTOMERS_COUNT';
const DELETE_FROM_MY_CLIENTS = 'DELETE_FROM_MY_CLIENTS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
//const ADD_TO_MY_CLIENTS = 'ADD_TO_MY_CLIENTS';

let initialState = {
  myClients: [],
  totalCount: 0,
  pageSize: 5,
  currentPage: 1,
  isFetching: false,
}

const myClientsReducer = (state = initialState, action) => {

  switch (action.type) {
    
    case SET_MY_CLIENTS:
      return {
        ...state,
        myClients: action.myClients,
      };
    
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    
    case SET_TOTAL_MY_CLIENTS_COUNT:
      return {
        ...state,
        totalCount: action.count,
      };
    
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case DELETE_FROM_MY_CLIENTS:
      return {
        ...state,
        myClients: state.myClients.filter(id => id !== action.clientId)

      }
    
    default: return state;
    
  }
}

// actions creators

const setMyClients = (myClients) => (
  {
    type: SET_MY_CLIENTS,
    myClients: myClients,
  }
);

export const setCurrentPage = (currentPage) => (
  {
    type: SET_CURRENT_PAGE, currentPage,
  }
);

export const setMyClientsTotalCount = (count) => (
  {
    type: SET_TOTAL_MY_CLIENTS_COUNT,
    count: count,
  }
);

export const setIsFetching = (isFetching) => (
  {
    type: TOGGLE_IS_FETCHING, isFetching,
  }
);

const deleteClientAC = (clientId) => (
  {
    type: DELETE_FROM_MY_CLIENTS, clientId
  }
);

// thunks

export const getMyClients = (pageSize, currentPage) => async (dispatch) => {
  //debugger;
  dispatch(setIsFetching(true));
  try {
    let response = await clientsAPI.getClients(pageSize, currentPage);
    dispatch(setIsFetching(false));
    dispatch(setMyClients(response.data.resultClients));
    dispatch(setMyClientsTotalCount(response.data.totalCount));
  } catch (e) {
    console.log(e);
  }
}

export const deleteMyClient = (clientId, pageSize, currentPage) => async (dispatch) => {
  dispatch(setIsFetching(true));
  try {
    let response = await clientsAPI.deleteMyClient(clientId);
    if (response.message === "Client Deleted") {
      dispatch(setIsFetching(false));
      dispatch(deleteClientAC);
      dispatch(getMyClients(pageSize, currentPage));
    }
  } catch (e) {
    console.log(e);
  }
}

export const addClient = (
  fullName,
  avatar,
  contact,
  contactValue, 
) => async (dispatch) => {
  //debugger;
  try {
    let response = await clientsAPI.addClient(
      fullName,
      avatar,
      contact,
      contactValue
    );
    if (response.data._id) {
      dispatch(showSuccessModal());
    }
  } catch (e) {
    console.log(e);
  }
}

export default myClientsReducer;
