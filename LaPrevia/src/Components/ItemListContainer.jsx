import React from 'react'
import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';
import {Box, Center} from '@chakra-ui/react';
import {collection, getDocs, getFirestore} from 'firebase/firestore'



const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryid } = useParams();
  
  useEffect(() => {
    const db = getFirestore()

    const itemsCollection = collection(db, "products")
    getDocs(itemsCollection).then((snapshot) => {
      const docs =snapshot.docs.map((doc) => doc.data())
      console.log(docs);
      setItems(docs)
      })
  }, []);

  return (

    <div>
      
      {items.length ?
       
        <ItemList items={items}/>:
        <span> Loading </span>
       
      }
    </div>

  );
}
export default ItemListContainer
