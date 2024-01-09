import React from 'react'
import { useState } from "react"; 

const ItemCount = ({stock, initial=0, onAdd}) => {
    const [counter, setCounter]= useState(initial);
    return (
        <>
            <div>Contador</div>
            <button onClick={()=>{setCounter(counter - 1)}} disabled={counter === initial}> - </button>
            <span>{counter}</span>
            <button onClick={()=>{setCounter(counter + 1)}} disabled={counter === stock}> + </button>
            <div><button onClick={() => onAdd(counter)} disabled={counter === 0}>Agregar al carrito</button></div>
        </>
  );

}


export default ItemCount