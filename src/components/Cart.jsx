import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import Logout from './Logout';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const totalPrice = getTotalPrice();

  useEffect(() => {
    // Store totalPrice in local storage
    localStorage.setItem('totalPrice', totalPrice);
  }, [totalPrice]);

  console.log('Total Price:', totalPrice);  // Debugging log

  return (
    <div>
      <Logout />
      <Link to="/courses">
        <button>All Courses</button>
      </Link>
      <Link to="/profile"><button>Your Profile</button></Link>

      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${totalPrice}</h3>
            <Link to="/payment">
                <button>Buy</button>
            </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
