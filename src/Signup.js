import {Component} from 'react';
import axios from "axios"

class Signup extends Component{
    constructor(){
        super()
        this.state={
            // onlineUsers :0
        }
    }
     user ={} 
     getName = (event)=>{
        this.user.name = event.target.value

    }
    getEmail =(event)=>{
        this.user.email=event.target.value
        // console.log('event value',event.target.value);
    }
    getPassword=(event)=>{
        this.user.password = event.target.value
    }
    register = ()=>{
        if(!this.user.email || !this.user.password || !this.user.name)
        {
          this.setState ({
              errorMessage :"Please fill details"
          })
        } else {
            let apiuril="https://apibyashu.herokuapp.com/api/register"
            axios({
                url:apiuril,
                method:"post",
                data:this.user
            }).then((response)=>{
                console.log("response from signup api",response.data)
            },(error)=>{
               console.log("Error from signup api",error)
            })
        }
            // this.setState({
            //     errorMessage:null
            // })
        
        console.log("...user details",this.user);
        
    }
    // goOnline = ()=>{
    //     console.log(".......",this);
    //     this.setState({
    //         onlineUsers :this.state.onlineUsers + 1
    //     })
    // }
    render(){
        return (
            <div style={{width: "50%" , margin:"auto"}}>
                {/* hey Users {this.state.onlineUsers} */}
                <div className="form-group">
                    <label>Email:-</label>
                <input type="email" class="form-control" onChange={this.getEmail}></input>
                </div>
                <div className="form-group">
                    <label>Name:-</label>
                <input type="text" class="form-control" onChange={this.getName}></input>
                </div>
                <div className="form-group">
                    <label>Password:-</label>
                <input type="password" class="form-control" onChange={this.getPassword}></input>
                </div>
                <div style={{color:"red"}}>
                    {this.state.errorMessage}
                    </div>
                {/* <button onClick={this.goOnline}>Go Online</button> */}
                <button className="btn btn-primary" onClick={this.register}>Register</button>
            </div>
        )
    }
}
export default Signup