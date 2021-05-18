import { Route, useRouteMatch } from "react-router";
import CartSummary from "./CartSummary";
import Order from "./Order";
import Payment from "./Payment";
import Address from "./Address";
import {Link ,useHistory} from "react-router-dom";
import {useState} from "react";


function Checkout(){
  var history=useHistory();
  //  const[show,setShow]=useState(false)
  if(!localStorage.token)
  {
     history.push("/login")
  }
    var route= useRouteMatch()
    var url =route.url
    var path = route.path
    console.log(".........",route)
   return <div style={{marginTop:"50px"}}className="container">
    <div className="row">
      
        <div className="col-4">
          <Link to={url}><li>Cart Summary</li></Link>
          <Link to={url+"/address"} ><li>Add Address</li></Link>
          <Link to={url+"/payment"}><li>Payment</li></Link>
          <Link to={url+"/order"}><li>Order</li></Link>
        </div>
        <div className="col-8">
         <Route exact path={path} component={CartSummary} />
         <Route exact path={path+"/address"} component={Address} />
         <Route exact path={path+"/payment"} component={Payment} />
         <Route exact path={path+"/order"} component={Order} />
        </div>
    </div>
    
    </div>
}
export default Checkout