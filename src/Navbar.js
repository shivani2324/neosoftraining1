import { Link } from 'react-router-dom';
 function Navbar(props){
  
  var onlineUsers=0
  let Serach = function(event){
    onlineUsers ++
    event.preventDefault()
    console.log("search happening" ,event,onlineUsers);
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     {/* {onlineUsers}  */}
  <Link to="/"><a class="navbar-brand">My Cakeshop</a></Link>
  {/* Hello {props.user} */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      {/* <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li> */}
      {/* <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li> */}
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button onClick={Serach} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      {props.loginStatus ? <div>
      <button  class="btn btn-danger" type="submit">Logout</button>
      </div> :<div> 
        <Link to="/login">
        <button  class="btn btn-primary" type="submit">Login</button>
        </Link></div>
      }
     
      
    </form>
  </div>
</nav>
  )
}

export default Navbar