import React from 'react'
import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';
import {Box, Center} from '@chakra-ui/react';
import {collection, getDocs, getFirestore,query,where} from 'firebase/firestore'



const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryid } = useParams();
  console.log(categoryid);
  
  useEffect(() => {
    const db = getFirestore()

    const itemsCollection = collection(db, "products")

    if (categoryid == undefined){
      getDocs(itemsCollection).then((snapshot) => {
        const items =snapshot.docs.map((doc) => ({
          ...doc.data(),
          id:doc.id,
        }));
       
        setItems(items);
      });
    } else {
      const itemsCollection = query(
        collection(db, "products"),
        where ("category","==",categoryid));

        getDocs(itemsCollection).then((snapshot) => {
        const items =snapshot.docs.map((doc) => ({
          ...doc.data(),
          id:doc.id,
        }));
       
        setItems(items);

    });
  }

  }, [categoryid]);

  return (
      <ItemList items={items}/>
  )
}
export default ItemListContainer
