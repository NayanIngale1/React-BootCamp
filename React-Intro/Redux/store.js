import { legacy_createStore as createStore } from "redux"
import { reducer } from "./reducer";


const initialStore = {
    todos: []
}


export const store = createStore(reducer, initialStore);
