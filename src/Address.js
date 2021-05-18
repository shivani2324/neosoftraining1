import { useState } from "react"
import { Link, withRouter,useHistory } from 'react-router-dom';
import {connect} from "react-redux"

function Address(props){
var [formerror ,setFormeror] =useState({})
var validate =function (elements) {
var errors = {}
console.log("elements received for validation",elements)
if(!elements.name.value){
  errors.name="Name is required";
}
if(!elements.phone_number.value){
    errors.phone_number="Phone number is required";
}
if(!elements.address.value){
  errors.address="Address is required";
}
if(!elements.city.value){
  errors.city="City is required";
}
if(!elements.pincode.value){
  errors.pincode="Pincode is required";
}
var errorkeys=Object.keys(errors)
if(errorkeys.length>0)
return errors
else 
return false
  }
  var history = useHistory();
var [name, setName]=useState("")
var [phone, setPhone]=useState("")
var [address, setAddress]=useState("")
var [city,setCity]=useState("")
var [pincode,setPincode]=useState("")

const total_data = {
  name,
  phone,
  address,
  city,
  pincode
}

 //console.log("alll data coming here",total_data);

const handleSubmit = (event) => {
  event.preventDefault();
  //alert(`Submitting Name ${name}`)
  props.dispatch({
    type:"ADDRESS",
    payload:total_data
  })
 // alert ("data save")
 props.history.push("payment")
 //console.log("dispatch valuee",props.dispatch)
}

  let placeOrder = (props) => {
   // event.preventDefault();
   var form =document.getElementById("addressform")
    console.log("form elements in this",form.elements,form.controls)
    var errors = validate(form.elements)
    if(errors){
      setFormeror(errors)
    }else {
     setFormeror({})
    }
  }
    return(
    <div>
    <h1>Address Details</h1>
    <form id="addressform" onSubmit={handleSubmit} >
    <div class="form-group">
    <label>Name</label>
    <input type="text" name="name"  value={name} onChange={e => setName(e.target.value)} class="form-control"  placeholder="Enter name" />
    <div style={{color:"red"}}>{formerror?.name && <div> {formerror.name} </div> } </div>
    </div>
    <div class="form-group">
    <label>Phone Number</label>
    <input type="text" name="phone_number" value={phone} onChange={e => setPhone(e.target.value)} class="form-control"  placeholder="Enter phone number" />
    <div style={{color:"red"}}>{formerror?.phone_number && <div> {formerror.phone_number} </div> } </div>
     </div>
    <div class="form-group">
    <label>Address</label>
    <input type="text" name="address" value={address} onChange={e => setAddress(e.target.value)} class="form-control" placeholder="Apartment, studio, or floor" />
    <div style={{color:"red"}}>{formerror?.address && <div> {formerror.address} </div> } </div>
    </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label>City</label>
      <input type="text" name="city" value={city} onChange={e => setCity(e.target.value)} class="form-control"  placeholder="Enter City"/>
      <div style={{color:"red"}}>{formerror?.city && <div> {formerror.city} </div> } </div>
    </div>
    <div class="form-group col-md-6">
      <label>Pincode</label>
      <input type="text" name="pincode" value={pincode} onChange={e => setPincode(e.target.value)} class="form-control"  placeholder="Enter pincode" />
      <div style={{color:"red"}}>{formerror?.pincode && <div> {formerror.pincode} </div> } </div>
    </div>
  </div>
  <div  style={{display: 'flex', justifyContent: 'center' , marginTop:'30px'}}>
  
  <button type="submit" onClick={ placeOrder } class="btn btn-primary">Add Address</button>
  </div>
  </form>
</div>
)
}
export default connect()(Address)