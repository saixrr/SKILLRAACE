import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string; // Single image URL
}

const FlashSales: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the products from the backend API
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products); // Assuming the API returns products in a `products` key
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="flash-sales">
      <h2 style={{color:'black'}}>Flash Sales</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image || 'placeholder-image.jpg'} // Display the image or a fallback
              alt={product.name}
            />
            <p>{product.name}</p>
            <span>${product.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlashSales;
