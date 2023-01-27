import React, {Component} from 'react';
import './assets/css/style.css';
import { connect } from 'react-redux/es/exports';
import { compose } from "redux";
import { Route, Routes, HashRouter, BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Contacts from './components/Contacts';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import CustomersContainer from './components/Admin/Customers/CustomersContainer';
import MyClientsContainer from './components/Admin/Clients/MyClientsContainer';
import ProfileContainer from './components/Admin/ClientProfile/ProfileContainer';
import Login from './components/Login';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader';
import SuccessModal from './components/SuccessModal';
import { withRouter } from './hoc/withRouter';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import SmoothScroll from "./utils/smoothScroll";

const Portfolio = React.lazy(() => import('./components/Portfolio/Portfolio'));
const Admin = React.lazy(() => import('./components/Admin/Admin'));

class App extends Component {

  componentDidMount() {
    //this.props.getAuthAdminData(this.props.token);
    this.props.initializeApp(this.props.token);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="App">
          <SmoothScroll>
            <Routes>
              <Route path='/*'
                element={<HeaderContainer />} />
            </Routes>
            <React.Suspense fallback={<Preloader />}>
              <Routes>
                <Route exact path='/'
                  element={<MainPage />} />
                <Route path="/portfolio/"
                  element={<Portfolio />} />
                <Route path={`/admin/`}
                  element={<Admin />}>
                  <Route path="/admin/customers"
                    element={<CustomersContainer />} />
                  <Route path="/admin/clients"
                    element={<MyClientsContainer />} />
                  <Route path={`/admin/profile/:profileId`}
                    element={<ProfileContainer />} />
                </Route>
                <Route path='/login'
                  element={<Login />} />
              </Routes>
            </React.Suspense>
            <Contacts />
            <Footer />
          </SmoothScroll>
        <SuccessModal />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //isAuth: state.auth.isAuth,
  //token: state.auth.token,
  initialized: state.app.initialized
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const AhTattooistaApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
}

//basename={process.env.PUBLIC_URL}

export default AhTattooistaApp;
