import "./index.css";

function addTodo() {
  let task = document.querySelector(".input-text").value;
  console.log("task:", task);
  let p = document.createElement("p");
  p.innerText = task;
  p.classList.add("task");
    document.querySelector(".tasks").append(p);
    document.querySelector(".input-text").value = "";
}

export { addTodo };
