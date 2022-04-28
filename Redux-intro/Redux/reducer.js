import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./action";

export const reducer = (store, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return {
        ...store,
        todos: [...store.todos, payload],
      };
    case DELETE_TODO:
      return {
        ...store,
        todos: store.todos.filter((item) => item !== payload),
      };
    case TOGGLE_TODO:
      return {
        ...store,
        todos: 
          store.todos.map((t) => {
             return toggle(t,payload);
          }),
        
      };

    default:
      return store;
  }
};

const toggle = (todo,payload) => {
  if (todo.id !== payload.id) {
    return todo;
  }

  return {
    ...todo,
    status: !todo.status,
  };
};
