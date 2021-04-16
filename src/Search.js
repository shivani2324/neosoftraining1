import Card from './Card';
import axios from "axios";
import { useEffect,useState } from 'react';

function Search(){
    let [cakesresult,setCakes]=useState([])
   
    let searchcakesapi="https://apibyashu.herokuapp.com/api/searchcakes?q="+"mango"
    useEffect(()=>{
      axios({
        method:"get",
        url:searchcakesapi
      }).then((response)=>{
           console.log("response from search cake api",response.data)
             setCakes(response.data.data)
      },(error)=>{
       console.log("error from search cakes api",error)
      })
    },[])
    return(
      <div className="container">
     <div className="row">
        {/* <Card cakedata= {obj}  /> */}
       {cakesresult?.length>0 ? cakesresult.map((each,index)=>{
         return <Card cakedata={each} key={index}/>
       }):<div className="alert alert-danger">No Result Found For Search</div>
       }
      </div>
      </div>
    )
  }
export default Search