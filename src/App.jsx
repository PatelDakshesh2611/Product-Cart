import React, { useReducer, useState } from 'react'
import CartContext from './Context/Cartcontext'
import { Route, Routes } from 'react-router-dom';
import ShowProducts from './Components/ShowProducts';
import Navbar from './Components/Navbar';
const initialState={
  items:[],
  totalAmount:0
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.item.id);
      if (existingItemIndex !== -1) {
        const updatedItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + action.payload.item.quantity
            };
          }
          return item;
        });
        return {
          ...state,
          items: updatedItems,
          totalAmount: state.totalAmount + action.payload.overAllPrice
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload.item],
          totalAmount: state.totalAmount + action.payload.overAllPrice
        };
      }
      case 'REMOVE_FROM_CART':
        const filteredItems = state.items.filter(item => item.id !== action.payload.id);
        const itemToRemove = state.items.find(item => item.id === action.payload.id);
        const updatedTotalAmount = state.totalAmount - (itemToRemove.price * itemToRemove.quantity);
        return {
          ...state,
          items: filteredItems,
          totalAmount: updatedTotalAmount
        };
    default:
      return state;
  }
};

const App = () => {
  const [cart,dispatch]=useReducer(cartReducer,initialState);
  const [togglePopup,setToggle]=useState(0)
  console.log(cart);
  return (
    <div>
      <CartContext.Provider value={{cart,dispatch,togglePopup,setToggle}}>
        <Navbar/>
      <Routes>
        <Route path='/' element={<ShowProducts/>}></Route>
      </Routes>
      </CartContext.Provider>
    </div>
  )
}

export default App