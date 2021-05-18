
import { get, param } from "jquery";
import {useParams} from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
import { connect } from "react-redux";

function CakeDetails(props){
    var addToCart = (cakeid,price,name,image) => {
        if(localStorage.token)
        {
          var userToken = localStorage.token
          //let addToCartUrl = "https://apifromashu.herokuapp.com/api/addcaketocart"
          let addToCartUrl = process.env.REACT_APP_BASE_URL+"/api/addcaketocart"
          const data={
            cakeid,
            price,
            name,
            image,
            weight:"200"
          }
          axios({
            method:"post",
            url:addToCartUrl,
            headers:{
              authtoken:userToken
            },
            data:data
          }).then((response) => {
             console.log("Response from addtocart api" , response)
             if(response.data.message = "Added to cart")
             {
               alert('Added to cart')
                props.dispatch({
                type:"CART_UPDATE_TRUE",
                cart_update:true
              })
              props.dispatch({
                type:"CART_UPDATE_FALSE",
                cart_update:false
              })
             // window.location.reload()
             }
             else
             {
               alert("Not Added to cart")
             }
        },(error) =>{
                 console.log("Error from addtocart api" , error)
             })
      }
      else
      {
        alert("Please login first")
      }
      }
    
    let params=useParams()
    let [cakedeatils,SetCakedetails]=useState({})
    //console.log("params are",params);
    //alert(params.cakeid)
    useEffect(()=>{
        // let cakedetailapi="https://apifromashu.herokuapp.com/api/cake/"+params.cakeid
        let cakedetailapi=process.env.REACT_APP_BASE_URL+"/api/cake/"+params.cakeid
        axios({
            method:"get",
            url:cakedetailapi,
        }).then((response)=>{
            SetCakedetails(response.data.data)
        },(error)=>{
            console.log("error from cake")
        })
    },[])
   
    return(
        <div className="card" style={{margin: "20px 140px"}}>
        <div className="card-body" style={{backgroundColor: "rgba(0,0,0,.03)"}}>
            <div className="row">
                <div className="col-sm-6">
                    <div style={{margin: "10px 60px"}}>
                        <img src={cakedeatils.image} 
                        class="card-img-top" alt="..." height="400px" />
                    </div>

                </div>
                <div className="col-sm-6">
                    <div style={{margin: "10px 20px"}}>
                        <h1 className="text-uppercase font-weight-bold pt-5 pb-3">{cakedeatils.name}</h1>
                        <p>{cakedeatils.description}</p>
                        <div className="pb-3" style={{fontSize: "25px"}}><span className="text-uppercase font-weight-bold">Current price: 
                            <span className="text-warning"> {cakedeatils.price}</span>
                            </span>
                        </div>
                       <div className="pb-3" style={{fontSize: "25px"}}><span className="text-uppercase font-weight-bold">Weight: 3KG</span></div>
                        <div className="pb-3" style={{fontSize: "25px"}}><span className="text-uppercase font-weight-bold">Flavour: 
                                <span className="font-italic text-warning"> Hazelnut cake</span>
                            </span>
                        </div>
                        <button style={{float:"center"}} onClick={()=>addToCart(cakedeatils.cakeid,cakedeatils.price,cakedeatils.name,cakedeatils.image)} class="btn btn-warning" type="button">
                         <i className="fa fa-cart-plus" aria-hidden="true"> Add To Cart</i></button>
                     </div>
                </div>
            </div>
 </div>
        </div>
    )
}

export default connect(function(state,props){
  console.log("state initialiy...",state)
return {
  cart_update:state?.cart_update
 // cart:state?.cart,
  //  user:state && state["user"]["name"],
  //  loginStatus:state && state["isloggedin"]
}
})(CakeDetails)

