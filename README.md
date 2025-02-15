# Decency Hairs and More E-commerce Website

## Overview

This project is an e-commerce website for Decency Hairs and More, designed to showcase and sell hair products online. It includes features like product listings, a shopping cart, checkout functionality with Paystack integration, and a professionally designed user interface.

## Technologies Used

- **Frontend:** React, Vite, HTML, CSS, JavaScript
- **Backend:** Node.js, Express, Cors (for a simple mock API)
- **Payment Gateway:** Paystack (integrated for payments)

## Getting Started

To run this project locally, follow these steps:

1.  **Install dependencies**:
    ```shell
    npm install
    ```

2.  **Start the development server**:
    ```shell
    npm run dev
    ```

   This will start the Vite development server. You can then view the application in your browser at the address provided by Vite (usually `http://localhost:5173`).

## Project Structure

-   `index.html`: Main HTML file.
-   `src/`: Contains all source code for the frontend:
    -   `main.jsx`: Entry point for React application.
    -   `App.jsx`: Main application component and routing setup.
    -   `components/`: Reusable React components (Navigation, ProductCard, Footer, etc.).
    -   `context/`: CartContext for managing shopping cart state.
    -   `pages/`: React components for different pages (HomePage, ProductList, ProductDetails, Cart, Checkout, OrderConfirmation).
    -   `assets/`: Images and other static assets.
    -   `index.css`: Global CSS styles.
-   `server/`: Contains the Node.js backend server:
    -   `server.js`:  Express server to serve product data (mock data).
-   `vite.config.js`: Vite configuration file.
-   `package.json`: Project dependencies and scripts.
-   `README.md`: Project documentation (this file).

## Features

-   **Homepage**: Attractive landing page with hero section, featured products, categories, about us, and testimonials.
-   **Product Listing**: Page to display all products with search, filter, and sorting capabilities.
-   **Product Details**: Detailed page for each product with images, description, and "Add to Cart" button.
-   **Shopping Cart**: Functionality to add, remove, and manage items in the cart, with quantity adjustments and cart total calculation.
-   **Checkout**: Page to collect customer information and integrate Paystack for payment processing.
-   **Order Confirmation**: Page displayed after successful payment.
-   **Responsive Design**: Website is designed to be responsive and work on different devices.
-   **Professional UI/UX**: Clean and modern design for a professional e-commerce experience.

## Payment Integration

-   Paystack is integrated for processing payments. You will need to replace the placeholder public key in `src/pages/Checkout.jsx` with your actual Paystack public key for live transactions. Test keys can be used for testing purposes.

## Further Improvements

This project can be further improved by adding features like:

-   **Backend Database**: Implement a database to store products and orders instead of using mock data.
-   **User Authentication**: Add user accounts for customers to manage profiles and order history.
-   **Admin Dashboard**: Create an admin dashboard for managing products, orders, and website content.
-   **Product Image Gallery/Carousel**: Enhance product details page with more image display options.
-   **Product Reviews and Ratings**: Allow customers to review and rate products.
-   **Wishlist Functionality**: Enable users to add products to a wishlist.

## Contact

Globalsync Technologies  
Ezekiel Funom Gwamna  
[Your Contact Information]

---

Thank you for using this project!
