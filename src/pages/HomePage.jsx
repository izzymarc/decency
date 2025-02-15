import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  // Featured products data
  const featuredProducts = [
    { id: 1, name: 'Silky Straight Bundles', price: 95.00, imageUrl: 'https://images.unsplash.com/photo-1599449488388-02c620f320f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHw2fHxzdHJhaWdodCUyMGhhaXIlMjBidW5kbGVzfGVufDB8fHx8MTY5NzYxMDY3N3ww&ixlib=rb-4.0.3&q=80&w=300' },
    { id: 2, name: 'Premium Lace Front Wig', price: 175.00, imageUrl: 'https://images.unsplash.com/photo-1623357982198-935006c94ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwxfHxMYWNlJTIwRnJvbnQlMjBXaWd8ZW58MHx8fHx8MTY5NzYxMDc1OHww&ixlib=rb-4.0.3&q=80&w=300' },
    { id: 4, name: 'Voluminous Body Wave Extensions', price: 85.00, imageUrl: 'https://images.unsplash.com/photo-1615123725904-9e7741975441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwzOHx8aGFpclxlbnwwfHx8fDE2OTc2MTA5MTZ8MA&ixlib=rb-4.0.3&q=80&w=300' },
  ];

  // Product categories data
  const productCategories = [
    { name: 'Wigs', imageUrl: 'https://images.unsplash.com/photo-1592849978613-1c199441b867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwyfHx3aWdzJTIwc2V0fGVufDB8fHx8MTY5Nz60NzY0OHww&ixlib=rb-4.0.3&q=80&w=300', link: '/products?category=wigs' },
    { name: 'Bundles', imageUrl: 'https://images.unsplash.com/photo-1623228732934-a72a06144991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHwyfHxIZWFkJTIwV2VhdmVzfGVufDB8fHx8MTY5NzYwNzc0OHww&ixlib=rb-4.0.3&q=80&w=300', link: '/products?category=bundles' },
    { name: 'Closures & Frontals', imageUrl: 'https://images.unsplash.com/photo-1670872499909-9919bb994388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjYxOTB8MHwxfHNlYXJjaHkyfHxMYWNlJTIwQ2xvc3VyZXN8ZW58MHx8fHx8MTY5NzYwNzgxN3ww&ixlib=rb-4.0.3&q=80&w=300', link: '/products?category=closures' },
  ];

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Premium Hair Products for You</h1>
          <p>Discover our exquisite collection of high-quality hair extensions, wigs, and accessories. Enhance your beauty with Decency Hairs and More.</p>
          <Link to="/products" className="shop-now-button">Shop Now</Link>
        </div>
      </section>

      <section className="categories-section">
        <h2>Shop By Category</h2>
        <div className="categories-grid">
          {productCategories.map(category => (
            <div key={category.name} className="category-card">
              <Link to={category.link}>
                <img src={category.imageUrl} alt={category.name} className="category-image" />
                <h3>{category.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <Link to={`/products/${product.id}`} className="view-product-button">View Product</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="why-choose-us-section">
        <h2>Why Choose Decency Hairs and More?</h2>
        <div className="why-choose-grid">
          <div className="why-choose-item">
            <h3>High-Quality Products</h3>
            <p>We offer only the best premium hair products, ensuring quality and durability.</p>
          </div>
          <div className="why-choose-item">
            <h3>Wide Selection</h3>
            <p>Explore a wide range of hair extensions, wigs, and accessories to find your perfect match.</p>
          </div>
          <div className="why-choose-item">
            <h3>Excellent Customer Service</h3>
            <p>Our dedicated team is here to assist you with any questions and ensure a smooth shopping experience.</p>
          </div>
          <div className="why-choose-item">
            <h3>Secure Online Shopping</h3>
            <p>Shop with confidence knowing your transactions are secure and your information is protected.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Customer Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"I absolutely love the hair I purchased from Decency Hairs! The quality is amazing and it looks so natural. Will definitely be buying again!"</p>
            <p className="customer-name">- Sarah J.</p>
          </div>
          <div className="testimonial-card">
            <p>"The customer service was top-notch. They helped me choose the perfect wig and it arrived quickly. I'm so happy with my purchase!"</p>
            <p className="customer-name">- Emily K.</p>
          </div>
        </div>
      </section>

      <section className="about-us-section">
        <h2>About Decency Hairs and More</h2>
        <p>At Decency Hairs and More, we are dedicated to providing you with the finest hair products. Our collection is carefully curated to ensure quality, style, and elegance. We believe everyone deserves to feel beautiful and confident, and our products are designed to help you achieve just that.</p>
      </section>
    </main>
  );
}

export default HomePage;
