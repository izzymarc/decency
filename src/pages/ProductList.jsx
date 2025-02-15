import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

// Helper function to filter products based on search term and category
const filterProducts = (products, searchTerm, category) => {
  const searchLower = searchTerm.toLowerCase();
  return products.filter(product => {
    const nameLower = product.name.toLowerCase();
    const descriptionLower = product.description.toLowerCase();
    const categoryMatch = category === 'all' || product.category === category;
    const searchMatch = searchTerm === '' || nameLower.includes(searchLower) || descriptionLower.includes(searchLower);
    return categoryMatch && searchMatch;
  });
};

// Helper function to sort products
const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case 'price-asc':
      return [...products].sort((a, b) => a.price - b.price);
    case 'price-desc':
      return [...products].sort((a, b) => b.price - a.price);
    default: // 'relevance' or any other case, return unsorted
      return products;
  }
};

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <main>Loading products...</main>;
  }

  if (error) {
    return <main>Error loading products: {error.message}</main>;
  }

  // Apply filtering and sorting using helper functions
  const filteredProducts = filterProducts(products, searchTerm, category);
  const sortedProducts = sortProducts(filteredProducts, sortBy);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <main>
      <h2>Our Products</h2>
      <div className="search-and-filter">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
          <option value="wigs">Wigs</option>
          <option value="bundles">Bundles</option>
          <option value="closures">Closures & Frontals</option>
          <option value="extensions">Extensions</option>
          <option value="weaves">Weaves</option>
          <option value="clip-ins">Clip-ins</option>
        </select>
        <select
          value={sortBy}
          onChange={handleSortByChange}
        >
          <option value="relevance">Sort by: Relevance</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
      <div className="products-grid">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default ProductList;
