
import { get, param } from "jquery";
import {useParams} from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
function CakeDetails(){
    let params=useParams()
    let [cakedeatils,SetCakedetails]=useState({})
    //console.log("params are",params);
    //alert(params.cakeid)
    useEffect(()=>{
        let cakedetailapi="https://apibyashu.herokuapp.com/api/cake/"+params.cakeid
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
                     </div>
                </div>
            </div>
 </div>
        </div>
    )
}

export default CakeDetails;