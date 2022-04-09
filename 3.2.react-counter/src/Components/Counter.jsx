import React from "react";
import { useState } from "react";
import "../App.css"

function Counter({initial}) {
    
    const [counter, setCounter] = useState(+initial);

    const handleChange = (value) => {
        if (counter + value < 0) return;
        
        setCounter(counter+value);
        
       
    }
console.log('counter:', counter)

    return (
        <div className="box">
            <h1 className="heading">REACT COUNTER</h1>
            <p style={{
                color:"grey"
            }}>If counter is RED means value is ODD and if it is 'GREEN' means value is 'EVEN'</p>

            <h1 className={counter == 0 ? "black" : counter % 2 != 0 ? "red" : "green"}>{counter}</h1>
            
            <button className="btn" onClick={() => { setCounter(0) }}>RESET</button>
            <button className="btn" onClick={() => { handleChange(1) }}>ADD</button>
            <button className="btn" onClick={() => { handleChange(-1) }}>REDUCE</button>
            <button className="btn" onClick={() => { handleChange(counter) }}>DOUBLE</button>
        </div>
    );
}


export default Counter;