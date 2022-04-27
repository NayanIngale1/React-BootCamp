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
    // case TOGGLE_TODO:
    //   console.log("hello");
    //   return {
    //     ...store,
    //     todos: [
    //       ...store.todos.map((ele) => {
    //         if (ele.title == payload.title) {
    //           ele = {
    //             ...ele,
    //             status: !payload.status,
    //           };
    //         }
    //       }),
    //     ],
    //   };
    default:
      return store;
  }
};
