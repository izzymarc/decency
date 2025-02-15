import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard'; // Import ProductCard

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
        return data; // Return product data to use for fetching related products
      } catch (e) {
        setError(e);
        setProduct(null);
        return null; // Return null in case of error
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedProducts = async (productData) => {
      if (productData && productData.relatedProductIds) {
        try {
          // Fetch each related product by its ID
          const relatedProductsData = await Promise.all(
            productData.relatedProductIds.map(id =>
              fetch(`/api/products/${id}`).then(res => res.json())
            )
          );
          setRelatedProducts(relatedProductsData);
        } catch (e) {
          console.error("Error fetching related products:", e);
          setRelatedProducts([]); // Set to empty array in case of error
        }
      } else {
        setRelatedProducts([]); // No related products IDs, set to empty array
      }
    };

    fetchProductDetails().then(productData => {
      fetchRelatedProducts(productData); // Fetch related products after fetching main product
    });

  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert(`${product.name} added to cart!`);
    }
  };

  if (loading) {
    return <main>Loading product details...</main>;
  }

  if (error) {
    return <main>Error loading product details: {error.message}</main>;
  }

  if (!product) {
    return <main>Product not found.</main>;
  }

  return (
    <main className="product-details-page">
      <div className="product-image-container">
        <img src={product.imageUrl} alt={product.name} className="product-detail-image" />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-detail-description">{product.description}</p>
        <p className="product-detail-price">Price: ${product.price}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="related-products-section">
          <h3>Related Products</h3>
          <div className="products-grid">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default ProductDetails;
