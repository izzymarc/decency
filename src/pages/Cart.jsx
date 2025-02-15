import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, getCartTotal, increaseQuantity, decreaseQuantity } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleIncreaseQuantity = (productId) => {
    increaseQuantity(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseQuantity(productId);
  };

  if (cart.length === 0) {
    return (
      <main>
        <h2>Shopping Cart</h2>
        <p>Your cart is currently empty.</p>
      </main>
    );
  }

  return (
    <main>
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="cart-item-price">Price: ${item.price}</p>
              <div className="quantity-controls">
                <button className="quantity-button" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span className="item-quantity">{item.quantity}</span>
                <button className="quantity-button" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button className="remove-from-cart-button" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <strong>Total: ${getCartTotal().toFixed(2)}</strong>
      </div>
      <div className="checkout-button-container">
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </main>
  );
}

export default Cart;
