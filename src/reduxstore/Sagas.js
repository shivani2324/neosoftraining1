 import axios from "axios";
 import {call,put,takeEvery,all} from "redux-saga/effects"

 function Order(action){
    return axios({
       method:"post",
    url:process.env.REACT_APP_BASE_URL+"/api/addcakeorder",
     //url:"https://apibyashu.herokuapp.com/api/cakeorders",
       headers:{
        authtoken:localStorage.token
       },
       data:action.payload
    })
}

function FetchOrder_Data(action){
    return axios({
       method:"post",
       url:process.env.REACT_APP_BASE_URL+"/api/cakeorders",
       headers:{
        authtoken:localStorage.token
       }
   })
}

function* FetchOrderGenerator(action){
    var result= yield call(FetchOrder_Data,action)
    if(result.data.cakeorders.length != 0){
        //order success
        yield put({
            type:"FETCH_ORDER_SUCCESS",
            payload:result.data.cakeorders
        })
        //props.history.push("/")
    }else {
        //order fail
        yield put({
            type:"FETCH_ORDER_FAILURE"
        })
    }
  }

function* OrderGenerator(action){
        var result= yield call(Order,action)
        if(result.data.messageg === "order placed"){
            //order success
            yield put({
                type:"ORDER_SUCCESS",
            })
            //props.history.push("/")
        }else {
            //order fail
            yield put({
                type:"ORDER_FAILURE"
            })
        }
      }
    
      export function* Ordersaga(){
        yield takeEvery('ORDER',OrderGenerator)
        yield takeEvery('FetchOrder_Data',FetchOrderGenerator)
      }      

        export function* Rootsaga(){
            yield all([Ordersaga()])
        }

