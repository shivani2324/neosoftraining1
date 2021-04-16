import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

function Login(props){
    console.log("propssss",props);
    useEffect(()=>{
    }, [])
    var [error,setError]=useState()
   // var user ={}
    var [user, setUser]=useState({})
    let getEmail=(event)=>{
        setUser({email:event.target.value,password:user.password})
        user.email=event.target.value
    }
    let getPassword=(event)=>{
        setUser({password:event.target.value,email:user.email})
        user.password=event.target.value
    }
    let login =()=>{
        // if(user.email=="test@gmail.com" && user.password=="test"){
        //    // setError("Login success")
        //    console.log(".........",props)
        //    props.informlogin("Shivani")
        // }else{
        //     setError("Login error")
        // }
        console.log("User is trying to login" , user)
        let loginapi = "https://apibyashu.herokuapp.com/api/login"
        axios({
            url:loginapi,
            method:"post",
            data:user
        }).then((response)=>{
             console.log("response from login api", response.data)
             if(response.data.token){
                 localStorage.token=response.data.token
                 localStorage.email=response.data.email
                 props.history.push("/")
             }else{
                 alert("Invalid Credentials")
             }
        },(error)=>{
            console.log("error from login api", error)
        })
       // console.log("user is trying to login",user)
    }
    return(

        <div style={{width: "50%" , margin:"auto"}}>
        {/* hey Users {this.state.onlineUsers} */}
        <div className="form-group">
            <label>Email:-</label>
        <input type="email" class="form-control" onChange={getEmail}></input>
        {/* {user.email} */}
        { user && <label>{user.email}</label>}
        </div>
        <div className="form-group">
            <label>Password:-</label>
        <input type="password" class="form-control" onChange={getPassword}></input>
        {/* {user.password} */}
        { user && <label>{user.password}</label>}
        </div>
        <div style={{color:"red"}}>
            {/* {errorMessage} */}
            {error}
            </div>
            <div style={{float:"right"}}>
                <Link to="/forgot">Forgot Password ?</Link>
            </div>
            <div>
                <Link to="/signup">New User?Click Here</Link>
            </div>
        {/* <button onClick={this.goOnline}>Go Online</button> */}
        <button className="btn btn-primary" onClick={login}>Login</button>
    </div>  
    )

}
export default Login
