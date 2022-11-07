import classes from "./Cart.module.css";
import React from "react";
import Modal from "../UI/Modal";

export default function Cart(props) {
  const cartItems = (
    <ul className={classes[`cart-items`]}>
      {[{ id: `c1`, name: `sushi`, amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onHideOrders}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35</span>
      </div>
      <div className={classes.actions}>
        <button className={classes[`button--alt`]} onClick={props.onHideOrders}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
