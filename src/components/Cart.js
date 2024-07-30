// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
            
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount}</h3>
    </div>
  );
};

export default Cart;
