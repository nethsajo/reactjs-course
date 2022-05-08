import React, { useContext } from 'react';
import CartContext from 'context/CartContext';
import { Button, Modal } from 'shared/elements';
import { StyledCart } from 'shared/styles/componentStyles/cartStyles';

const Cart = props => {
  const context = useContext(CartContext);

  console.log(context);

  return (
    <Modal onHideCart={props.onHideCart}>
      <StyledCart>
        <h2 className="cart__title">Your order</h2>
        <div className="cart__list">
          {context.items.map(item => (
            <div className="cart__item" key={item.id}>
              <h3 className="cart__item-name">{item.name}</h3>
              <span className="cart__item-price">
                {item.price} x {item.quantity} @ {item.price * item.quantity}
              </span>
            </div>
          ))}
        </div>
        <div className="cart__total">
          <h2 className="cart__total-title">Total Amount: </h2>
          <span className="cart__total-amount">{context.totalAmount}</span>
        </div>
        <div className="cart__actions">
          <Button variant="normal" onClick={props.onHideCart}>
            Close
          </Button>
          <Button>Order</Button>
        </div>
      </StyledCart>
    </Modal>
  );
};

export default Cart;
