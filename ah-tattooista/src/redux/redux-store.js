import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import portfolioReducer from './portfolio-reducer';
import modalReducer from './modal-reducer';
import mainPageReducer from './mainPage-reducer';
import customersReducer from './customers-reducer';
import myClientsReducer from './myClients-reducer';
import profileReducer from './profile-reducer';
import authReducer from './auth-reducer';
import adminReducer from './admin-reducer';
import appReducer from './app-reducer';
//import { reducer as formReducer } from 'react-final-form';

let reducers = combineReducers({
  portfolio: portfolioReducer,
  modal: modalReducer,
  mainPage: mainPageReducer,
  customers: customersReducer,
  myClients: myClientsReducer,
  profile: profileReducer,
  auth: authReducer,
  admin: adminReducer,
  app: appReducer,
  //form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
