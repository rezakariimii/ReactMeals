import React from 'react';
import CartContext from './cart-context';


export default function CartProvider(props) {
    const addItemTOCartHandler = item => { };
    const removeItemFromCartHandler = id => { };
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemTOCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
      </CartContext.Provider>
  )
}
