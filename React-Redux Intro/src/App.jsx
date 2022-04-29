import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Home";
import { TodoItem } from "./Components/TodoItem";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Todo } from "./Components/Todo";


function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/todos" element={ <TodoItem />}></Route>
        <Route path="/todos/:id" element={ <Todo />}></Route>
        </Routes>
    

    </div>
  );
}

export default App;
