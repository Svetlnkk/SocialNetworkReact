import { Route, Routes } from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import FriendContainer from './components/Friend/FriendContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HeaderComponent from './components/Header/HeaderComponent';
import Login from './components/Login/Login';
import React, { Component, Suspense } from 'react'; 
import { connect } from 'react-redux';
import {Navigate, useLocation, useNavigate, useParams,} from "react-router-dom";
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const DialogsContainer=React.lazy(()=>import('./components/Dialogs/DialogsContainer'));
const ProfileContainer=React.lazy(()=>import('./components/Profile/ProfileContainer'));


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

class App extends Component{
  catchAllUnhandledErrors=(promiseRejectionEvent)=>{
    alert("Some eroor occured");
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount(){
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }
    return (
      <div className="App">
        <HeaderComponent />
        <NavbarContainer />
        <div className="App-content">
          <Suspense fallback={<div><Preloader /></div>}>
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path='/profile/*' element={<ProfileContainer />} />
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/friend/*' element={<FriendContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<div>404 NOT FOUND</div>} />
          </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
  initialized: state.app.initialized
})
let AppContainer= compose( 
  withRouter,
  connect(mapStateToProps, { initializeApp }))
  (App);
const MainApp=(props)=>{
  return <BrowserRouter>
  <Provider store={store}>
    <AppContainer />
  </Provider>
</BrowserRouter>
}
export default MainApp;