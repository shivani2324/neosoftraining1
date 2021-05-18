//import store from "./store"

export function Firstmiddleware(store){
    return function (next){
        return function (action){
                //  console.log("action",action,"store",store.getState)

                //  var result=next(action)
                //  console.log(".....",store.getState())
                //  return result
        }
    }
}

export let logger =store=>next=>action=>{
    console.log("Before Action",action.type,store.getState())
    var result =next(action)
    console.log("After action store state",store.getState())
    return result
}