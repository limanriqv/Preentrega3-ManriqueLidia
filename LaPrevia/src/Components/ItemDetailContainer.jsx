import React from 'react'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const {id} =useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        let products =[{id:1, category: "Cervezas", title:"c1IMPERIAL ROJA X 473 CC", price:2000, img:"https://acdn.mitiendanube.com/stores/001/144/141/products/mesa-de-trabajo-214-10021-e07e2f0f098cbbf9b516706061970391-640-0.webp"}, 
    {id:2, category: "Cervezas", title:"c2IMPERIAL IPA X 473 CC", price:2000, img:"https://acdn.mitiendanube.com/stores/001/144/141/products/mesa-de-trabajo-214-10041-5b86a6e85e98e2726916706068783488-640-0.webp"},
    {id:3, category: "Cervezas", title:"c3SCHNEIDER X 473 CC", price:2000, img:"https://acdn.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-06-30-at-19-45-03-81-e3168f2a9751aaaf7c16251459233390-640-0.webp"},
    {id:4, category: "Cervezas", title:"c4 CORONA X 710 CC", price:2000, img:"https://acdn.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-06-04-at-11-09-441-67044c3e5f5e3ec74616228162630716-640-0.webp"},
    {id:5, category: "Vinos", title:"v1CORDERO CON PIEL DE LOBO - MALBEC", price:3000, img:"https://acdn.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-02-17-at-19-49-121-ac843a8b877b93d99216136021832189-640-0.webp"},
    {id:6, category: "Vinos", title:"v2 MALCRIADO - MALBEC 2015", price:3000, img:"https://acdn.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-08-17-at-20-00-021-9449a2ebf4a25ca7e416292412374356-640-0.webp"},
    {id:7, category: "Vinos", title:"v3FUEGO NEGRO - CABERNET SAUVIGNON", price:3000, img:"https://acdn.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-08-24-at-19-27-41-21-66a779a57d0ba76f8f16298447841881-640-0.webp"},
    {id:8, category: "Vinos", title:"v4VINOS - ESPUMANTES - PROGENIE EXTRA BRUT", price:3000, img:"https://acdn.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-02-18-at-19-44-10-11-f1c65b932a61c96e3c16136883701874-640-0.webp"}];



    new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(products.find((element)=> element.id == id));
      },2000)
    }).then((data)=>{
      setItem(data);
    })
    }, [id])

  return (
    <>

    { Object.getOwnPropertyNames(item).length && <ItemDetail item={item}/>}
    
    </>
  )
}



export default ItemDetailContainer