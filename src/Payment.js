import { useState } from "react"
import {connect} from "react-redux"
import { useHistory } from 'react-router-dom';

function Payment(props){
    const[show,setShow]=useState(false)
    var total_price = props.total
    const  { name,phone,pincode,city,address  } = props.address_details
    var all = []
    props.cart.forEach(element => {
      all.push(element.cakeid) 
    })
    const order_data = { name,
      phone,
      pincode,
      city,
      address,
      price:total_price,
      cakes:all
    }
    var history = useHistory();
   //console.log ("all data comin here",order_data)  
    let payment_data =()=> {
        props.dispatch({
           type:"ORDER",
           payload:order_data
          })
        //  alert ("data save")
         props.history.push("order")
    }
    return(
        <div className="container">
            <h3>Payment Details</h3>
        <form>
         <div class="form-group">
         <div class="form-check form-check-inline">
           <input class="form-check-input" type="checkbox" onClick={()=>setShow(!show)} />
           <label class="form-check-label">COD</label>
         </div>
        </div>
        {
       show ?<button type="button" onClick={payment_data} class="btn btn-primary">Place Order</button>:null
        }
      </form>
   
      </div>
    )
}

export default connect(function(state,props){
  return{
    total:state?.total,
    address_details:state?.address_details,
    cart:state?.cart,
    success:state?.order_success
  }
})(Payment)