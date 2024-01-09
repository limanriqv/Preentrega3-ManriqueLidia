import { useState } from 'react'
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CartProvider } from './Components/Context/CartContext';
import Cart from './Components/Cart';



function App() {
 

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path="/category/:categoryid" element={<ItemListContainer/>} />
          <Route path='/Cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
