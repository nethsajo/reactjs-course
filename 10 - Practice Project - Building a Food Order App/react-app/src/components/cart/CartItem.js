import React from 'react';
import { MdAdd, MdRemove, MdDelete } from 'react-icons/md';

const CartItem = props => {
  const price = `$${props.price.toFixed(2)}`;
  const totalPrice = props.price * props.quantity;

  return (
    <div className="cart__item">
      <div className="cart__item-description">
        <h3 className="cart__item-name">{props.name}</h3>
        <span className="cart__item-price">
          {price} x {props.quantity} @ ${totalPrice.toFixed(2)}
        </span>
      </div>
      <div className="cart__item-control">
        <button className="cart__item-btn" onClick={props.onDecrement}>
          <MdRemove className="icon" />
        </button>
        <button className="cart__item-btn" onClick={props.onIncrement}>
          <MdAdd className="icon" />
        </button>
        <button className="cart__item-btn" onClick={props.onRemove}>
          <MdDelete className="icon" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
