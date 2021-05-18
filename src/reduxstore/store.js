import {applyMiddleware, createStore} from "redux"
import demo from "./reducer"
// import {logger} from "./middleware";
 import createSaga from "redux-saga";
 import {Ordersaga,Rootsaga} from "./Sagas";


 var sagaMiddleware=createSaga()
//  var middleware = applyMiddleware(logger ,sagaMiddleware)
 var middleware = applyMiddleware(sagaMiddleware)

export default createStore(demo,middleware)
// export default createStore(demo)
 sagaMiddleware.run(Rootsaga)
 