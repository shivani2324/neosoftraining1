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
import axios from "axios";
import { connect } from "react-redux";
import Checkout from './Checkout';
import Viewcart from './Viewcart';
import Forgot from './Forgot';
import React,{ Suspense } from "react"

var SuspendedAdmin=React.lazy(()=>import('./Admin'))

function App(props){  
  if(localStorage.token && !props.user){
    var token=localStorage.token;
    console.log("user is already login");
    

    axios({
      method:"get",
      url: process.env.REACT_APP_BASE_URL+"/api/getuserdetails",
      headers:{
        authtoken:token
      }
    }).then((response)=>{
      console.log("response from userdeatils api",response)
      props.dispatch({
        type:"INITIALIZE_USER",
        payload:response.data.data
      })
    },(error)=>{
       console.log("error from get user",error)
    })
  }
  //  var[user,SetUser] =useState()
  //  var[loginStatus,SetloginStatus] =useState(false)
  //  function LoginDone(data){
  //   SetUser(data)
  //   SetloginStatus(true)
  //  }
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
     <Route path="/forgot" exact component={Forgot} />
     <Route path="/Signup" exact component={Signup} />
     <Route path="/Search"  component={Search} />
     <Route path="/cake/:cakeid" exact component={CakeDetails} />
     <Route path="/checkout"  component={Checkout} />
     <Route path = "/Viewcart" component={Viewcart} />
     <Route path="/Admin" exact>
       <Suspense fallback={<div>Loading...</div>}>
         <SuspendedAdmin />
       </Suspense>
     </Route> 
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

export default connect(function(state,props){
  return{
    user:state?.user
  }
})(App);
