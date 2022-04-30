import { ADD_TODO, STORE_DATA, DELETE_TODO, TOGGLE_TODO } from "./actions";

export const todoReducer = (store, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return {
        todos: [...store.todos, payload],
      };
    case STORE_DATA:
      return {
        todos: payload,
      };
    case DELETE_TODO:
      return {
        todos: store.todos.filter((item) => item !== payload),
      };
    case TOGGLE_TODO:
      return {
        todos: store.todos.map((t) => {
          return toggle(t, payload);
        }),
      };

    default:
      return store;
  }
};

const toggle = (todo, payload) => {
  if (todo.id != payload.id) {
    return todo;
  } else if (todo.status == "true") {
    return {
      ...todo,
      status: "false",
    };
  } else if (todo.status == "false") {
    return {
      ...todo,
      status: "true",
    };
  }
};
