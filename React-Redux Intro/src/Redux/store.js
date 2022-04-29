
import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

let init = {
    todos:[]
}




export const store = createStore(reducer,init);

// store.subscribe(()=>console.log(store.getState()))
