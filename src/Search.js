import Card from './Card';
import axios from "axios";
import { useEffect,useState } from 'react';
import queryString from "query-string";

function Search(props){
  const parsed=queryString.parse(props.location.search);
  console.log("parsed",parsed);
    let [cakesresult,setCakes]=useState([])
   
    // let searchcakesapi="https://apibyashu.herokuapp.com/api/searchcakes?q="+"mango"
    let searchcakesapi=process.env.REACT_APP_BASE_URL+"/api/searchcakes?q="+parsed.searchtext
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
    },[props.location.search])

    var [cakedata, setCakeData] = useState();

    function getCakeData (data) {
        console.log("...... getCakeData" , data)
        setCakeData(data)
    }
    return(
      <div className="container" style={{marginTop:"50px"}}>
     <div className="row">
        {/* <Card cakedata= {obj}  /> */}
       {cakesresult?.length>0 ? cakesresult.map((each,index)=>{
         return (
           <div class="col-3"><Card cakedata={each} key={index} getDetail={getCakeData}/>
           </div>
         )
       }):<div className="alert alert-danger">No Result Found For Search</div>
       }
        {/* {cakes?.length>0 && cakes.map((each, index)=>{
                    return (<Cake cakedata={each} key={index} getDetail={getCakeData} />) 
                })} */}
      </div>
      </div>
    )
  }
export default Search