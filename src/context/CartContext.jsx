import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Get cart from local storage if available
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Save cart to local storage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart(prevCart => {
    const itemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
    if (itemIndex >= 0) {
      // Item already exists in cart
      console.log(`${item.name} is already in your cart.`);
      return prevCart; // Return the unchanged cart
    } else {
      // Item does not exist in cart, add it with quantity 1
      return [...prevCart, { ...item, quantity: 1 }];
    }
  });
  };


  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      const itemIndex = newCart.findIndex(item => item.id === itemId);
      if (itemIndex >= 0) {
        newCart[itemIndex] = {
          ...newCart[itemIndex],
          quantity: newCart[itemIndex].quantity + 1 // Increase quantity by 1
        };
      }
      return newCart;
    });
  };

  const decreaseQuantity = (itemId) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      const itemIndex = newCart.findIndex(item => item.id === itemId);
      if (itemIndex >= 0 && newCart[itemIndex].quantity > 1) {
        newCart[itemIndex] = {
          ...newCart[itemIndex],
          quantity: newCart[itemIndex].quantity - 1 // Decrease quantity by 1
        };
      }
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};


