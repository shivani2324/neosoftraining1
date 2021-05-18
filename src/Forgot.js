import { useState } from "react"
import { useHistory } from 'react-router-dom';

import axios from "axios";
function Forgot (props){
    const history = useHistory() ;
   var [user, setUser]=useState({})
    let getEmail=(event)=>{
       user.email=event.target.value
    }
    var [formerror ,setFormeror] =useState({})
    var validate =function(elements) {
        var errors = {}
        if(!elements.email.value){
          errors.email="Email is required";
        }
        var errorkeys=Object.keys(errors)
              if(errorkeys.length>0)
               return errors
               else 
              return false
    }
    let forgot_psd =()=>{
        var form =document.getElementById("forgotform")
        console.log("form elements in this",form.elements,form.controls)
        var errors = validate(form.elements)
        if(errors){
          setFormeror(errors)
        }else {
            var q=document.getElementById('textpsd').value;
          setFormeror({})
          
        // let loginapi = "https://apifromashu.herokuapp.com/api/recoverpassword"
        let loginapi = process.env.REACT_APP_BASE_URL+"/api/recoverpassword"
        axios({
            url:loginapi,
            method:"post",
            data:user
        }).then((response)=>{
             console.log("response from login api", response.data)
             alert ("Password updated successfully,please check your email")
             let url= "/" + q;
             history.push(url)
           
        },(error)=>{
            console.log("error from  api", error)
        })
    }
    }
    return (
        <div className="container" style={{marginTop:"50px"}}>
            <div className="border" style={{width:"50%",margin:"auto",padding:"20px"}} >
            <form id="forgotform">
            <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
            <div className="col-md-6">
            <div className="form-group">
            <label>Email:-</label>
            <input type="email" name="email" class="form-control" onChange={getEmail}></input>
             <div style={{color:"red"}}>{formerror?.email && <div>{formerror.email}</div> } 
             </div>
             </div>
             </div>
             </div>
             <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
             <button type="button" id="textpsd" onClick={forgot_psd} className="btn btn-primary">Update Password</button>
            </div>
            </form>
            </div>
        </div>
    )
}

export default Forgot