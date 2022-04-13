import { TodoInput } from "./TodoInput"
import Todolist from "./Todolist"
import {useState} from "react"
import { nanoid } from 'nanoid'


function Todo() {

    const [todos, setTodos] = useState([
        {
              title: "Hey, welcome to the todo list application",
            status: false,
            id: nanoid(4)
        },
        {
              title: "I am completed todo",
            status: true,
            id: nanoid(4)
        },
        {
              title: "You can also delet todo from list by clicking delet button",
            status: false,
            id: nanoid(4)
        }
    ])
    
    

    const getTodo = (todo) => {
        
        const newtodo = {
            title: todo,
            status: false,
            id: nanoid(4)
        }

        setTodos([...todos,newtodo])

    }

    const handleStatus = (id) => {
        
        //find the todo with id
        // cahnge the status
        // set the new todos 
        setTodos(
            todos.map((e) => (
            e.id === id ? {...e,status:!e.status}:e
        )))
    }

    const handleDelet = (id) => {
        
        setTodos(
            todos.filter((e) => (
                e.id !== id
            ))
        )

    }
    return (
        <div className="todoContainer" >
           <h1 style={{fontSize:"50px"}}>Todos List </h1>
            <TodoInput getTodo={getTodo}/>
            <Todolist todos={todos} handleStatus={ handleStatus } handleDelet={handleDelet}/>
           
        </div>
    )
}


export {Todo}