import React, { useReducer } from 'react';
import CartContext from './cart-context';


const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === `Add`) {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}
export default function CartProvider(props) {
    const [cartState,dispatchCart] = useReducer(cartReducer,defaultCartState)
    const addItemTOCartHandler = item => {
        dispatchCart({type:`Add`,item: item})
    };
    const removeItemFromCartHandler = id => {
        dispatchCart({type:`Remove`,id:id})
    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemTOCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
      </CartContext.Provider>
  )
}
