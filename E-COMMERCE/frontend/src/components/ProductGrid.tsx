import React from 'react';

interface ProductGridProps {
  title: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title }) => {
  const products: Product[] = [
    { id: 1, name: 'Product 3', price: 300, image: 'product5.jpg' },
    { id: 2, name: 'Product 4', price: 400, image: 'product6.jpg' },
    // Add more products here
  ];

  return (
    <section className="product-grid-section">
      <h2 style={{color:'black'}}>{title}</h2>
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

export default ProductGrid;
