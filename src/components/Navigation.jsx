import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logoImage from '../assets/logo.png'; // Import logo image

function Navigation() {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logoImage} alt="Decency Hairs Logo" style={{ height: '45px' }} /> {/* Image Logo */}
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li>
          <Link to="/cart">
            Cart ({itemCount})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
