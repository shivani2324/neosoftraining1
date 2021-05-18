import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";

function Viewcart(props){
 var removeCart =(cakeid)=>{
    if(localStorage.token)
    {
      var userToken = localStorage.token
      let removeCartUrl = "https://apifromashu.herokuapp.com/api/removecakefromcart"
      const data={
        cakeid
        }
      axios({
        method:"post",
        url:removeCartUrl,
        headers:{
        authtoken:userToken
        },
        data:data
      }).then((response) => {
         console.log("Response from addtocart api" , response)
         if(response.data.message = "Data remove")
         {
           alert('Data remove from cart')
          // getcartitems();
          var cart_item = props.cart
          cart_item.splice(cart_item.findIndex(e => e.cakeid === cakeid ),1)
          props.dispatch({
            type:"REMOVE_CART_ITEM",
            payload:cart_item,
            cart_update:true
          })
          props.dispatch({
            type:"CART_UPDATE_FALSE",
            cart_update:false
          })
         }
         else
         {
           alert("Not Added to cart")
         }
        },(error) =>{
             console.log("Error from removecart api" , error)
         })
  }
 }

  //  useEffect(()=>{
  //       getcartitems();
  //  },[])

  //  var getcartitems=()=>{
  //   if(localStorage.token)
  //   { 
  //        let cartdetailapi="https://apibyashu.herokuapp.com/api/cakecart/"
  //        var userToken = localStorage.token
  //        axios({
  //            method:"post",
  //            url:cartdetailapi,
  //            headers:{
  //                authtoken:userToken
  //               },
  //                data:{}
  //        }).then((response)=>{
  //            console.log("response",response);
  //           // Setcart(response.data.data)
  //           if(response.data.data.length != '0'){
  //            props.dispatch({
  //                type:"CART_DETAILS",
  //                payload:response.data.data
  //              })
  //             }
  //        },(error)=>{
  //            console.log("error from cake")
  //        })
  //    }else{
  //        console.log("error")
  //    }
  //  }
   
   return(
     <div style={{marginTop:"50px"}} class="container">
      {  props.cart.length == 0 || props.loginStatus == false ?
       <div class="row"> 
        <div class="col-4 alert alert-danger" role="alert">
              Your Cart is Empty!
        </div>
         </div>
         :<div className="row">
     <div className="col-md-6">
    <table class="table table-hover">
        <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
       </thead>
    <tbody>
        {
           props.cart?.length>0 && props.cart.map((each, index)=>{
        return(
    <tr>
      <th scope="row"><img style={{width:"50px",height:"50px"}} src={each.image} /></th>
      <td>{each.name}</td>
      <td>{each.price}</td>
      <td><button onClick={()=>removeCart(each.cakeid)} class="btn btn-danger">Remove</button></td>
    </tr>
        )
        })
        } 
 </tbody>
</table>
</div>
<div class="col-2">
</div>

<div style={{marginTop:"5%",height:"30%" }}className="col-md-4 border">
 <div style={{marginTop:"20px"}}><b>
<p style={{float:"left"}}>Total</p>
<p style={{float:"right"}}>Rs {props.total}</p></b>
</div>
<div class="row" style={{display: 'flex', justifyContent: 'center',marginBottom:"30px",marginTop:"80px"}}>
<Link to="/Checkout"><button style={{size:"20px"}} class="btn btn-primary">View Checkout</button></Link>
</div>
</div>
</div>
}
</div>
    )
}

export default connect(function(state,props){
return {
    cart:state?.cart,
    loginStatus:state?.isloggedin,
    total:state?.total
}
}
)(Viewcart)