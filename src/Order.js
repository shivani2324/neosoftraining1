import {connect} from "react-redux"
import { useEffect } from "react"

function Order(props){

    useEffect(()=>{
       if(props.loginStatus== true){
        props.dispatch({
            type:"FetchOrder_Data"
            })
       }    
    }, [])

    return(
        <div style={{marginTop:"10px"}} class="container">
        <div className="col-md-6">
       <table class="table table-hover border" style={{width:"200%",padding:"50px",margin:"10px"}}>
           <thead>
       <tr>
         <th scope="col">Order ID</th>
         <th scope="col">Order Date</th>
         <th scope="col">Payment Mode</th>
         <th scope="col">Total</th>
        </tr>
        </thead>
       <tbody>
       {
           props.fetch_data?.length>0 && props.fetch_data.map((each, index)=>{
        return(
         <tr>
         <td>{each.orderid}</td>
         <td>{each.orderdate}</td>
         <td>{each.mode}</td>
         <td>{each.price}</td>
        
       </tr>
        )
           })
        }
    </tbody>
   </table>
   </div>
</div>
       )
}

export default connect(function(state,props){
    return {
    address:state?.address,
    loginStatus:state?.isloggedin,
    fetch_data:state?.order_data  
    }
})(Order)