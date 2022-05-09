import React, { useContext } from 'react';
import CartContext from 'context/CartContext';
import CartItem from './CartItem';
import { Button, Modal } from 'shared/elements';
import { StyledCart } from 'shared/styles/componentStyles/cartStyles';

const Cart = props => {
  const context = useContext(CartContext);

  const totalAmount = context.items.reduce((accumulator, current) => {
    return (accumulator += current.price * current.quantity);
  }, 0);

  const cartItemIncrementQty = id => {
    context.toggleItemQuantity(id, 'increment');
  };

  const cartItemDecrementQty = id => {
    context.toggleItemQuantity(id, 'decrement');
  };

  const cartItemRemoveHandler = id => {
    context.removeItem(id);
  };

  return (
    <Modal onHideCart={props.onHideCart}>
      <StyledCart>
        <h2 className="cart__title">Your order</h2>
        {context.items.length === 0 && (
          <p className="cart__message">No items in your cart!</p>
        )}
        {context.items.length > 0 && (
          <>
            <div className="cart__list">
              {context.items.map(item => (
                <CartItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onIncrement={cartItemIncrementQty.bind(null, item.id)}
                  onDecrement={cartItemDecrementQty.bind(null, item.id)}
                  onRemove={cartItemRemoveHandler.bind(null, item.id)}
                />
              ))}
            </div>
            <div className="cart__total">
              <h2 className="cart__total-title">Total Amount: </h2>
              <span className="cart__total-amount">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
          </>
        )}
        <div className="cart__actions">
          <Button variant="normal" onClick={props.onHideCart}>
            Close
          </Button>
          {context.items.length > 0 && <Button>Order</Button>}
        </div>
      </StyledCart>
    </Modal>
  );
};

export default Cart;
