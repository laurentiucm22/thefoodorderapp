import React from "react";
import classe from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {
  const cartItems = (
    <ul className={classe["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}

      <div className={classe.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>

      <div className={classe.actions}>
        <button className={classe["button--alt"]}>Close</button>
        <button className={classe.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
