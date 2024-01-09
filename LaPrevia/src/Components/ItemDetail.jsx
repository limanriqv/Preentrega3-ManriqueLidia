import React from 'react'
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {useState , useContext} from 'react';
import ItemCount from './ItemCount';
import CartContext from '../Context/CartContext';


const ItemDetail = ({item}) => {
    const {id, price, title, img} = item;
    const [counter, setCounter] = useState(0);

    const {addItem}= useContext(CartContext);



    const onAdd = (count) => {
      console.log(`Items  ${count}`);
      setCounter(count)
      addItem(item, count);


    }
  
    return (
      <div>
        <h1>{title} - {id}</h1>
        <img src={img}></img> 
        <h3>{price}</h3> 
        {counter !== 0 &&   //renderizado condicional
          <Link to="/Cart"><Button>Finalizar compra</Button></Link> }
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
      </div>
    )
  }
  



export default ItemDetail