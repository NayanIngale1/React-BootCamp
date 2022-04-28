import { addTodo, deleteTodo, toggleTodo } from "./Redux/action";
import { store } from "./Redux/store";
import "./style.css";
import { v4 as uuidv4 } from 'uuid';


// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("todo_input").value;

  if (title === "") {
    return;
  }

  const todo = {
    id: uuidv4().slice(0,4),
    title: title,
    status: false,
  };

  store.dispatch(addTodo(todo));

  // console.log("todo:", store.getState());

  const state = store.getState();
  const todos = state.todos;

  showTodos(todos);
});

function showTodos(todos) {

  console.log(store.getState().todos);


  let container = document.getElementById("list");
  container.innerHTML = "";

  todos.map((ele,i) => {
    let div = document.createElement("div");
    div.innerText = (i+ 1) + ".  " + ele.title;
    div.id = "todo";

    let p = document.createElement("p");
    p.innerText = "Status : " + ele.status 
    div.appendChild(p);
    
    let deletbtn = document.createElement("button");
    deletbtn.innerText = "Delete";
    deletbtn.id = "delete";
    deletbtn.className = "btn";
    deletbtn.addEventListener("click", () => {
      
      store.dispatch(deleteTodo(ele));
      showTodos(store.getState().todos);
    });
    div.appendChild(deletbtn);
    let togglebtn = document.createElement("button");
    togglebtn.innerText = "Toggle";
    togglebtn.id = "toggle";
    togglebtn.className = "btn";
    togglebtn.addEventListener("click", () => {
      store.dispatch(toggleTodo(ele));
      showTodos(store.getState().todos);
    });
    div.appendChild(togglebtn);



    container.appendChild(div);
  });
}
