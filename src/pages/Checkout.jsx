import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const total = getCartTotal();

  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    const paystackArgs = {
      key: 'YOUR_PAYSTACK_PUBLIC_KEY', // Replace with your actual Paystack public key
      email: customerDetails.email,
      amount: total * 100, // Amount in kobo
      currency: 'NGN', // Change currency as needed
      callback: (response) => {
        console.log('Payment successful! Transaction ref:', response.reference);
        clearCart();
        navigate('/order-confirmation');
      },
      onClose: () => {
        alert('Payment window closed.');
      },
    };

    const handler = window.PaystackPop.setup(paystackArgs);
    handler.openIframe();
  };

  if (cart.length === 0) {
    return (
      <main>
        <h2>Checkout</h2>
        <p>Your cart is empty. Please add items to your cart before checkout.</p>
      </main>
    );
  }

  return (
    <main>
      <h2>Checkout</h2>
      <div className="checkout-container">
        <div className="checkout-form">
          <h3>Customer Information</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={customerDetails.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={customerDetails.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea id="address" name="address" value={customerDetails.address} onChange={handleInputChange} required />
          </div>
        </div>

        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <ul className="order-items">
            {cart.map(item => (
              <li key={item.id} className="order-item">
                {item.name} ({item.quantity}) - ${item.price} each
              </li>
            ))}
          </ul>
          <div className="total-amount">
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
          <button className="pay-button" onClick={handlePayment}>Pay with Paystack</button>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
