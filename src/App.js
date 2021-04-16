import logo from './logo.svg';
import Home from './Home';
import Navbar from './Navbar';
import Signup from './Signup';
import Login from "./login";
import './App.css';
import Cakedetails from './Cakedetails';
import Search from './Search'
import { useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CakeDetails from './Cakedetails';



 function App(){  
   var[user,SetUser] =useState()
   var[loginStatus,SetloginStatus] =useState(false)
   function LoginDone(data){
    SetUser(data)
    SetloginStatus(true)
   }
     return(
    // <div className="App">
    <div>
      <Router>
      <Navbar/>
    {/* <CakeDetails/> */}
    <div>
     {/* <Navbar loginStatus={loginStatus} user={user}/>   */}
     {/* <Cakedetails/> */}
     <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/login" exact component={Login} />
     <Route path="/Signup" exact component={Signup} />
     <Route path="/Search" exact component={Search} />
     <Route path="/cake/:cakeid" exact component={CakeDetails} />
  
     {/* <Login informlogin={LoginDone}/> */}
     {/* <Search />
     <Signup />
     <Home /> */}
     </Switch>
    </div>
    </Router>
    </div>
    )
  }

export default App;
