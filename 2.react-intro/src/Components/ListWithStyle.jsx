import React from "react";
import "../App.css";


function ListWithStyle({ title, type }) {
    
    return <li className={type}>{title}</li>
    
}




export { ListWithStyle }