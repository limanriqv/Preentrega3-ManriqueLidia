import React from 'react'
import { useState } from "react"; 
import {Box, Center, Button} from '@chakra-ui/react';

const ItemCount = ({stock, initial=0, onAdd}) => {
    const [counter, setCounter]= useState(initial);
    return (
        <Center py={12} style={{margin: "10px"}}>
        <Box>
            <Button onClick={()=>{setCounter(counter - 1)}} disabled={counter === initial}  style={{marginLeft: "50px"}} > - </Button>
            <span  style={{margin: "2px"}}>{counter}</span>
            <Button onClick={()=>{setCounter(counter + 1)}} disabled={counter === stock}  style={{marginLeft: "10px"}} > + </Button>
            <div><Button onClick={() => onAdd(counter)} disabled={counter === 0} style={{marginLeft: "20px"}} >Agregar al carrito</Button></div>
        
        </Box></Center>
    )

}


export default ItemCount