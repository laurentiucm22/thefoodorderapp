import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import classe from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => cartCtx.removeItems(id);
  const cartItemAddHandler = item => cartCtx.addItem(item);

  const cartItems = (
    <ul className={classe["cart-items"]}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}

      <div className={classe.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classe.actions}>
        <button onClick={onClose} className={classe["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classe.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
