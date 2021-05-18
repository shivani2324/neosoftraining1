import {useState,useEffect} from "react";
import {connect} from "react-redux";
import axios from "axios";
function CartSummary(props){
//     useEffect(()=>{
       
//    },[])

    return(
        <div  class="container">
            <h3>Summary Details</h3>
        <div className="row">
         <div className="col-md-6">
        <table class="table table-hover border" style={{width:"150%",padding:"50px",margin:"10px"}}>
            <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">(Rs)Price</th>
        </tr>
        </thead>
        <tbody>
        {
           props.cart?.length>0 && props.cart.map((each, index)=>{
        return(
        <tr>
          <td ><img style={{width:"50px",height:"50px"}} src={each.image} /></td>
          <td >{each.name}</td>
          <td >{each.price}</td>
          </tr>
         
              )
            })
            }
             <tr style={{width:"20%"}}>
                 <td></td>
                 <td></td>
              <td>{props.total}</td>
             </tr>
     </tbody>
    </table>
    </div>
    </div>
   </div>
    )
}
export default connect(function(state,props){
    return {
        cart:state?.cart,
        total:state?.total
    }
    }
    )(CartSummary)