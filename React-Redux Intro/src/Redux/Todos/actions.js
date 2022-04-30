//  Action types

export const ADD_TODO = "ADD_TODO";

export const DELETE_TODO = "DELETE_TODO";

export const TOGGLE_TODO = "TOGGLE_TODO";

export const STORE_DATA = "STORE_DATA";
//action creators for

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const storeData = (payload) => {
  return {
    type: STORE_DATA,
    payload: payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};
export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload: payload,
  };
};
