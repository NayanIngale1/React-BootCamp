
import { legacy_createStore as createStore } from "redux";
import { todoReducer } from "./Todos/reducer";

let init = {
    todos:[]
}




export const store = createStore(todoReducer, init);

// store.subscribe(()=>console.log(store.getState()))
