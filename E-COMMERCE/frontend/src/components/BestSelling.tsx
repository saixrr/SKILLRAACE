import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const BestSelling: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 150, image: 'product3.jpg' },
    { id: 2, name: 'Product 2', price: 250, image: 'product4.jpg' },
    // Add more products here
  ];

  return (
    <section className="best-selling">
      <h2 style={{color:'black'}}>Best Selling Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <span>${product.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSelling;
