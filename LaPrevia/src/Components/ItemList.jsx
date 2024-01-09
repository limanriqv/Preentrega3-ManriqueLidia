import React from 'react';
import Item from './Item';
import { Flex } from '@chakra-ui/react';

const ItemList =({items}) => {
    return (
        <Flex flexDirection={"row"} justifyContent={"center"}>
            {items.map((item,indx)=>
                <Item key={indx} id={item.id} title={item.title} price={item.price} img={item.img}/>
        
        )}

        </Flex>
    );
}



export default ItemList