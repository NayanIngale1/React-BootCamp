import {useState}from 'react'

function TodoInput({getTodo}) {

    const [text, setText] = useState("");
    return (
        <div className="todoInputContainer" >
            <input className="todoinput"type="text" placeholder="add todo..." onChange={(e)=>setText(e.target.value)} />
            <button className = "addTodoBtn" onClick={() => {
                getTodo(text);
            }}>ADD</button>
            
            
        </div>
    )
}

export {TodoInput}