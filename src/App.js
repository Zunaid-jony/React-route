import logo from './logo.svg';
import './App.css';
import Home from './componets/Home/Home';
import Friend from './componets/Friends/Friend';
import Notfound from './componets/Notfound/Notfound';
import About from './componets/About/About';
import { BrowserRouter,Route, Router } from 'react-router-dom';
import {Switch } from 'react-router-dom';
import Header from './componets/Header/Header';
import FriendDetail from './componets/FriendDetal/FriendDetail';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/friends'>
          <Friend></Friend>
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetail></FriendDetail>

        </Route>
        
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='*'>
          <Notfound></Notfound>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
