import { clientsAPI } from '../api/clientApi';

const SET_MY_CLIENT_PROFILE = 'SET_MY_CLIENT_PROFILE';
const SET_CONTACT_FIELD_VALUE = 'SET_CONTACT_FIELD_VALUE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  profile: null,
  isFetching: false,
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case SET_MY_CLIENT_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }

    case SET_CONTACT_FIELD_VALUE:
      return {
        ...state,
        profile: action.profile
      }

    default: return state;
  }
}

const setMyClientProfile = (profile) => (
  {
    type: SET_MY_CLIENT_PROFILE,
    profile: profile,
  }
);

const setContactFieldValue = (profile) => (
  {
    type: SET_CONTACT_FIELD_VALUE,
    profile: profile
  }
);

const setIsFetching = (isFetching) => (
  {
    type: TOGGLE_IS_FETCHING, isFetching,
  }
);

// thunks

export const getClientProfile = (clientId) => async (dispatch) => {
  dispatch(setIsFetching(true));
  try {
    let response = await clientsAPI.getClientProfile(clientId);
    if (response.data) {
      dispatch(setMyClientProfile(response.data));
      dispatch(setIsFetching(false));
    }
  } catch (e) {
    console.log(e);
  }
}

export const updateContactField = (
  clientId,
  contactTitle,
  contactFieldValue) => async (dispatch) => {

    try {
      let response = await clientsAPI.updateContactField(clientId, contactTitle, contactFieldValue);
      if (response) {
        dispatch(setContactFieldValue(response.data));
      }
    } catch (e) {
      console.log(e);
    }
}

export const saveClientAvatar = (clientId, file) => async (dispatch) => {
  debugger;
  try {
    let response = await clientsAPI.updateClientAvatar(clientId, file);
    if (response.data) {
      dispatch(setMyClientProfile(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

export default profileReducer;
