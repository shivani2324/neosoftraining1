import Carousel from './carousel';
import Card from './Card';
import axios from "axios";
import { useEffect,useState } from 'react';
//import Cakedetails from './Cakedetails'
// import cakes from './data.js';

var obj = {
  name:'Nature',
  image:'image1.jpg',
  price:900,
  id:123456
}

function Home(){
  let [cakes,setCakes]=useState([])
//   var [cakeshow,setcakeShow]=useState(false)
//   var [details,setDetails]=useState({});
// let showDetails=(data)=>{
//   setcakeShow(true)
//     setDetails(data)
// }

  // let allcakesapi="https://apifromashu.herokuapp.com/api/allcakes"
  let allcakesapi=process.env.REACT_APP_BASE_URL+"/api/allcakes"
  useEffect(()=>{
    axios({
      method:"get",
      url:allcakesapi
    }).then((response)=>{
         console.log("response from all cake api",response.data)
           setCakes(response.data.data)
    },(error)=>{
     console.log("error from all cakes api",error)
    })
  },[])
  return(
    <div>
    <Carousel></Carousel> 
   
     {/* {cakeshow?<Cakedetails  cakedetaildata={details}/>:''} */}
     {/* <Card name="Nature" image="image1.jpg" /> */}
     <div class="row">
     {/* <Card cakedata= {obj}  /> */}
  
     {cakes?.length>0 &&cakes.map((each,index)=>{
      //  return (<Card cakedata={each} showdetails={showDetails}  key={index}/>)
       return (<Card cakedata={each} key={index}/>)
     })
     }
     {/* <Card />
     <Card />
     <Card />
     <Card /> */}
</div>
    </div>
  )
}

export default Home