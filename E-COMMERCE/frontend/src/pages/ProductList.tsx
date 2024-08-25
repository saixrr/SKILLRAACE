// src/pages/ProductList.tsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 19.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150' },
];

const ProductList: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 p-6 justify-center">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
