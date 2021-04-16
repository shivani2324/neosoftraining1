import {Link} from "react-router-dom";
function Card(props){
return (
        <div class="card" style={{width: "17rem"}}>
  <Link to={"/cake/"+props.cakedata.cakeid}>
  <img src={props.cakedata.image} style={{height:"200px"}} class="card-img-top" alt="..." />
  </Link>
  <div class="card-body">
    <h5 class="card-title">{props.cakedata.name}</h5>
   </div>
</div>
    )
}
export default Card