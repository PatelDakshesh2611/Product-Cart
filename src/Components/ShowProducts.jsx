import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import CartContext from '../Context/Cartcontext'
import Popup from './Popup'
const ShowProducts = () => {
  const data = [{
    id:1,
    image: '/productimages/beauty.jpg',
    price:120,
    title:'Beauty',
    description:'This is beauty product'
  },
  {
    id:2,
    image: '/productimages/beauty2.jpg',
    price:400,
    title:'Beauty',
    description:'This is beauty product'
  },
  {
    id:3,
    image: '/productimages/camera.jpg',
    price:1000,
    title:'Camera',
    description:'This is a camera product'
  },
  {
    id:4,
    image: '/productimages/clothes.jpg',
    price:3000,
    title:'Cloth',
    description:'This is cloth product'
  }, {
    id:5,
    image: '/productimages/shoes.jpg',
    title:'Shoes',
    description:'This is Shoes Product',
    price:6000
  },
]
const {togglePopup,setToggle}=useContext(CartContext);

  return (
    <div>
      <div className=' flex flex-wrap ml-10 mt-5'>
        {
          data.map((u) => {
            return (
              <ProductCard  key={u.id} data={u} />
            )
          })
        }
      </div>
      {togglePopup && <Popup/>}
    </div>
  )
}

export default ShowProducts