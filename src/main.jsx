import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Ensure CartProvider is imported

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> {/* CartProvider should wrap App */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
