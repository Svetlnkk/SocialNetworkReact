import { Route, Routes } from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import FriendContainer from './components/Friend/FriendContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderComponent from './components/Header/HeaderComponent';
import Login from './components/Login/Login';

function App(props) {

  return (
          <div className="App">
        <HeaderComponent />
        <NavbarContainer  />
        <div className="App-content">
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer/>} />
            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
            <Route path='/profile/*' element={<ProfileContainer/>}/>              
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/friend/*' element={<FriendContainer />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
