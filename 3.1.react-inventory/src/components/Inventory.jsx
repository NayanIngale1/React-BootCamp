import { useState } from "react";
import React from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 20,
  });
    // Create add and remove functions here that changes the
    // state.
  
  const handleInv = (item, oldValue, value) => {
    
    if (oldValue + value < 0) {
        return;
    }
    
    else if (item === "books") {
      setInv({ ...inv, books: oldValue + value });
    } else if (item === "notebooks") {
      setInv({ ...inv, notebooks: oldValue + value });
    } else if (item === "pens") {
      setInv({ ...inv, pens: oldValue + value });
    } else if (item === "inkpens") {
      setInv({ ...inv, inkpens: oldValue + value });
    }

  }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <h1 style={{
        textAlign: "center",
        borderBottom: "1px solid lightgray",
      }}>REACT INVENTORY</h1>
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={() => {
          handleInv("books", inv.books, 1)
        }}>+</button>
        <button className="circlularButton" onClick={() => {
          handleInv("books", inv.books, -1)
        }}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={() => {
          handleInv("notebooks", inv.notebooks, 1)
        }}>+</button>
        <button className="circlularButton" onClick={() => {
          handleInv("notebooks", inv.notebooks, -1)
        }}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={() => {
          handleInv("pens", inv.pens, 1)
        }}>+</button>
        <button className="circlularButton" onClick={() => {
          handleInv("pens", inv.pens, -1)
        }}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={() => {
          handleInv("inkpens", inv.inkpens, 1)
        }}>+</button>
        <button className="circlularButton" onClick={() => {
          handleInv("inkpens", inv.inkpens, -1)
        }}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks+inv.pens+inv.inkpens}

    </div>
  );
};
