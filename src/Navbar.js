import { useState ,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link,useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from "axios"

 function Navbar(props){

  console.log("props nav",props)
  const history = useHistory() ;
  //var onlineUsers=0

  useEffect(()=>{
    console.log("propsss",props.cart)
    if(localStorage.token)
    { 
        //  let cartdetailapi="https://apifromashu.herokuapp.com/api/cakecart"
         let cartdetailapi=process.env.REACT_APP_BASE_URL+"/api/cakecart"
         var userToken = localStorage.token
         axios({
             method:"post",
             url:cartdetailapi,
             headers:{
                 authtoken:userToken
                },
                 data:{}
         }).then((response)=>{
             console.log("response",response);
            // Setcart(response.data.data)
            if(response.data.data.length != 0 ){
              var pricetotal = 0
              response.data.data.forEach(element => {
                pricetotal = pricetotal + element.price
              });
                props.dispatch({
                 type:"CART_DETAILS",
                 payload:response.data.data,
                 total:pricetotal,
                 totalcartdata:response.data.data.length
               })
             }else{
                props.dispatch({
                  type:"CART_DETAILS",
                  payload:[],
                 })
              }
         },(error)=>{
             console.log("error from cake")
         })
     }else{
         console.log("error")
     }
},[props.update])

let Serach = function(event){
    event.preventDefault()
    var q=document.getElementById('textsearch').value;
    // onlineUsers ++
     //console.log("search happening" ,event.target.value);
      if(!q){
        alert("please select serch field")
      }else {
     let url= "/search?searchtext=" + q;
      history.push(url)
      document.getElementById('textsearch').value = "";
      }
  // console.log("url hereee" + url)
}
var logout =(event)=>{
 // event.preventDefault()
   props.dispatch({
    type:"LOGOUT"
  })
}
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     {/* {onlineUsers}  */}
  <Link to="/"><a class="navbar-brand">My Cakeshop</a></Link>
    {/* {props.user && <label>Hello {props.user}</label>} */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     <li class="nav-item">
       {props.user &&
        <a class="nav-link disabled" style={{color:"black"}} href="#" tabindex="-1" aria-disabled="true">
         Welcome {props.user} 
          </a>}
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      
      <input class="form-control mr-sm-1" type="search" id="textsearch" placeholder="Search" aria-label="Search"></input>
       <button style={{marginRight:"10px"}} onClick={Serach} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> 
      
        {props.loginStatus ?
       <div>
       <Link to="/Viewcart">
       <button style={{marginRight:"10px"}}  class="btn btn-warning my-2 my-sm-0" type="button"><FontAwesomeIcon icon={faCartPlus}  />
       <span class="badge badge-light" style={{marginLeft:"1px", position:"absolute", top: "3px"}}>{props.totalcartdata}</span>
       </button>
       </Link> 
       </div> : <div>
       <Link to="/Viewcart">
       <button style={{marginRight:"10px"}} class="btn btn-warning my-2 my-sm-0" type="button"><FontAwesomeIcon icon={faCartPlus}  />
       <span class="badge badge-light" style={{marginLeft: "1px", position: "absolute", top: "3px"}}>0</span>
       
       </button>
       </Link> 
       </div>
       }
    
       {props.loginStatus ? <div>
      <button  onClick={logout}  class="btn btn-danger" type="button">Logout</button>
      </div> :<div> 
        <Link to="/login">
        <button  class="btn btn-primary" type="submit">Login</button>
        </Link></div>
      }
     </form>
  </div>
</nav>
  )
}
//mapstatetoprop function
export default connect(function(state,props){
  console.log("state initialiy...",state)
return {
  user:state?.user?.name,
  loginStatus:state?.isloggedin,
  update:state?.cart_update,
  cart:state?.cart,
  total:state?.total,
  totalcartdata:state?.totalcartdata
  //  user:state && state["user"]["name"],
  //  loginStatus:state && state["isloggedin"]
}
})
(Navbar)