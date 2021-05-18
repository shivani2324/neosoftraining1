import {useState,useEffect} from 'react';
import { Link, withRouter,useHistory } from 'react-router-dom';
import axios from "axios"
import {connect} from 'react-redux';
function Login(props){
var history=useHistory();
  if(localStorage.token)
  {
     history.push("/")
  }
    console.log("propssss",props);
    useEffect(()=>{
    },[])
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
    var [formerror ,setFormeror] =useState({})
    var validate =function (elements) {
        var errors = {}
        if(!elements.email.value){
          errors.email="Email is required";
        }
        if(!elements.password.value){
            errors.password="Password is required";
          }
        var errorkeys=Object.keys(errors)
              if(errorkeys.length>0)
               return errors
               else 
              return false
    }
    let login =()=>{
        // if(user.email=="test@gmail.com" && user.password=="test"){
        //    // setError("Login success")
        //    console.log(".........",props)
        //    props.informlogin("Shivani")
        // }else{
        //     setError("Login error")
        // }
        var form =document.getElementById("loginform")
        console.log("form elements in this",form.elements,form.controls)
        var errors = validate(form.elements)
        if(errors){
          setFormeror(errors)
        }else {
          setFormeror({})
          //alert("form validate successfully")
        console.log("User is trying to login" , user)
        props.dispatch({
          type:"LOGIN",
          payload:user
        })
       // process.env.BASE_URL
      
        // let loginapi = "https://apifromashu.herokuapp.com/api/login"
        let loginapi = process.env.REACT_APP_BASE_URL+"/api/login"
        axios({
            url:loginapi,
            method:"post",
            data:user
        }).then((response)=>{
             console.log("response from login api", response.data)
                if(response.data.token){
                 localStorage.token=response.data.token
                 localStorage.email=response.data.email
                 props.dispatch({
                     type:"LOGIN",
                     payload:response.data
                 })
                 props.history.push("/")
             }
             else{
              alert("Invalid Credentials")
             }
        },(error)=>{
            console.log("error from login api", error)
        })
       console.log("user is trying to login",user)
    }
  }
    return(
      <div className="container" style={{marginTop:"50px"}}>
      <div  className="border" style={{width:"50%", margin:"auto",padding:"30px"}}>
          <form id="loginform">
        {/* hey Users {this.state.onlineUsers} */}
        {/* <h3>Login</h3> */}
        <div className="form-group">
            <label>Email :-</label>
        <input type="email" name="email" class="form-control" onChange={getEmail}></input>
        <div style={{color:"red"}}>{formerror?.email && <div> {formerror.email} </div> } </div>
        {/* {user.email} */}
      {/* /  { user && <label>{user.email}</label>}  */}
        </div>
        <div className="form-group">
            <label>Password :-</label>
        <input type="password" name="password" class="form-control" onChange={getPassword}></input>
        <div style={{color:"red"}}>{formerror?.password && <div> {formerror.password} </div> } </div>
        {/* {user.password} */}
        {/* { user && <label>{user.password}</label>} */}
        </div>
        {props.error && <div style={{color:"red"}}>
            {/* {errorMessage} */}
            {/* {error} */} Invalid Credentials
            </div> }
            <div style={{float:"right"}}>
                <Link to="/forgot">Forgot Password ?</Link>
            </div>
            <div>
                <Link to="/signup">New User?Click Here</Link>
            </div>
        {/* <button onClick={this.goOnline}>Go Online</button> */}
        <div style={{display:'flex',justifyContent:'center',marginTop:"30px"}}>
        <button type="button" className="btn btn-primary" onClick={login}>Login</button>
        </div>
        </form>
    </div>  
    </div>
    )

}
//Login = withRouter(Login)
//export default Login
export default connect()(Login)

//export default connect()(Login)
// export default connect((state,props)=>{
//   // console.log("start of the store in login component",state)
// return{
//     error:state["isloggedin"]
// }
// })(Login)
