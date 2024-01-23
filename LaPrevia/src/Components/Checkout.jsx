import React from 'react'
import {Container,Heading,Input,Button,Text,Center,FormControl,FormLabel} from "@chakra-ui/react";
  import { collection, getFirestore, addDoc } from "firebase/firestore";
  import { useState } from "react";
  import { useContext } from 'react';
  import { CartContext } from '../Context/CartContext';

  
  
    const Checkout = () => {
    const [orderId, setOrderId] = useState("");

    const [name, setName] = useState("");
    
    const [email, setEmail] = useState("");

    const { cart } = useContext(CartContext)
  
    const db = getFirestore();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        addDoc(ordersCollection, order).then(({id}) =>
            setOrderId(id))
        
    }
    const ordersCollection = collection(db, "orden");
  
    const order = {
      name,
      email,
    };
  
    return (
      <div>
        <Center>
          <Heading>Complete sus datos</Heading>
        </Center>
  
        <Container>
          <FormControl>
            <form onSubmit={handleSubmit}>
              <FormLabel>Nombre</FormLabel>
              <Input size="lg" onChange={(e) => setName(e.target.value)} />
              <FormLabel>Email</FormLabel>
              <Input size="lg" onChange={(e) => setEmail(e.target.value)} />
              <Button colorScheme="blue" type="submit" m={5}>
               Enviar
              </Button>
            </form>
          </FormControl>
        </Container>
        <Center>
          <Text as="b" m={3} fontSize="xl">
            Order ID:{" "}
          </Text>
          <Text as="mark" fontSize="2xl">
            {orderId}
          </Text>
        </Center>
      </div>
    );
  };
  
  

export default Checkout