import React from 'react'
import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../Context/CartContext';

const Cart = () => {
    const { items, removeItem, clear } = useContext(CartContext);

    return (<>
        <div>Cart</div>
        {!items.length ? <h2> No tengo items <Link to="/"><Button> Ir al inicio</Button></Link></h2>:
            <>
            <ol>
                {items.map(((item, indx) => <li key={indx}>{item.title} - {item.quantity} <Button onClick={()=> removeItem(item.id)}>Remover</Button></li>))}
            </ol>
            <h3>precio total = ${items.reduce((pv, cv) => pv + (cv.price * cv.quantity), 0)}</h3>
            </>
        }
            <div>
                <Button onClick={clear}>Limpiar carrito</Button>
            </div>
        </>
    )
}


export default Cart