import { authAPI } from '../api/authApi';

const SET_ADMIN_DATA = 'SET_ADMIN_DATE';
const SET_AUTH = 'SET_AUTH';

let initialState = {
  userId: null,
  username: null,
  password: null,
  token: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case SET_ADMIN_DATA:
      return {
        ...state,
        ...action.payload,
      };
    
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.isAuth
      };
    
    default: return state;
  }
}

const setAdminData = (userId, username, password, token) => (
  {
    type: SET_ADMIN_DATA,
    payload: { userId, username, password, token }
  }
);

const setAuth = (isAuth) => (
  {
    type: SET_AUTH, isAuth
  }
);

//thunks

export const getAuthAdminData = (token) => async (dispatch) => {
  
  try {
    let response = await authAPI.me(token);
    if (response.data.user) {
      dispatch(setAuth(true));
    }
  } catch (e) {
    console.log(e);
  }
}

export const login = (username, password) => async (dispatch) => {

  try {
    let response = await authAPI.login(username, password);
    if (response.data.user) {
      let { _id, username, password } = response.data.user;
      dispatch(setAdminData(_id, username, password, response.data.token));
      dispatch(getAuthAdminData(response.data.token));
    } 
  } catch (e) {
    console.log(e);
  }

}

export const logout = (userId) => async (dispatch) => {
  //debugger;
  try {
    let response = await authAPI.logout(userId);
    if (response.data === 0) {
      dispatch(setAdminData(null, null, null, null));
      dispatch(setAuth(false));
    }
  } catch (e) {
    console.log(e);
  }
}

export default authReducer;
