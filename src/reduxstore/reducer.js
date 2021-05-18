var demo =function(state={
    user:null,
    cart_update:false,
    address_details:{},
    cart:[],
    totalcartdata:0
}, action){
    switch(action.type){
      case "LOGIN" :{
        console.log("Login started")
        state = {...state}
        state["isloggedin"] = true
        state["user"] = action.payload
        state["cart_update"]=action.cart_update
        // state["isfetching"] = true
        return state
      }
      case "ORDER":{
        console.log("order details");
        state = {...state}
        state["order_data"] = action.payload
        state["isfetching"] = true
        return state
      }
     
      case "ORDER_SUCCESS":{
        console.log("here we have to write logic of order")
        state = {...state}
        state["order_data"] = action.payload
        state["isfetching"] = false
        state["cart"] = []
        state["total"]=0
        state["totalcartdata"]=0
        return state
      }
      case "ORDER_FAILURE":{
        state={...state}
        state["isfetching"] = false
        return state
      }
 
      case "FETCH_ORDER_SUCCESS":{
        console.log("here we have to write logic of FETCH_ORDER_SUCCESS")
        state = {...state}
        state["order_data"] = action.payload
        //state["isfetching"] = false
        return state
      }

      case "FETCH_ORDER_FAILURE":{
        state={...state}
        state["order_data"] = []
        return state
      }

      // case "LOGIN_SUCCESS":{
      // console.log("here we have to write logic of login")
      // state = {...state}
      // state["isloggedin"] = true
      // state["user"] = action.payload
      // state["cart_update"]=action.cart_update
      // state["isfetching"] = false
      // state["isloginerror"] = false
      // return state
      //   }
      // case "LOGIN_FAILURE" :{
      //   state={...state}
      //   state["isfetching"] = false
      //   state["isloginerror"] = true
      //   return state
      // } 
        case "INITIALIZE_USER":{
           state = {...state}
            state["isloggedin"] = true
            state["user"] = action.payload
            return state
              }

              case "ADDRESS":{
                state = {...state}
                state["address_details"] = action.payload
                return state
              }
              case "CART_DETAILS":{
                state = {...state}
                state["cart"] = action.payload
                state["cart_update"]=action.cart_update
                state["total"]=action.total
                state["totalcartdata"]=action.totalcartdata
                return state
                   }
                   case "CART_UPDATE_FALSE":{
                    state = {...state}
                    state["cart_update"]=action.cart_update
                   // state["cart"] = action.payload
                    return state
                       }
                       case "CART_UPDATE_TRUE" : {
                        state = {...state}
                        state["cart_update"]=action.cart_update
                        return state
                       }
                       case "REMOVE_CART_ITEM": {
                        state = {...state}
                        state["cart"] = action.payload
                        state["cart_update"] = action.cart_update
                        return state
                    }

       case "LOGOUT":{
           state ={...state}
           localStorage.clear()
           delete state["user"]
           //delete state["isloggedin"]
          state["isloggedin"] = false
           return state
       }
        default:return  state
    }
}
export default demo;