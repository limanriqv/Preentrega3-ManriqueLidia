import { useState } from 'react'
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';



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
          <Route path='Cart/Checkout' element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
