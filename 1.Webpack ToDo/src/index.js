import { addTodo } from "./addTodo.js";
// import Icon from "./todo.jpeg";

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

// document.getelementById("logo").src = Icon;
