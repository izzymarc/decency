import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navigation() {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <nav>
      <Link to="/" className="logo">Decency Hairs</Link> {/* Logo as Link */}
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
