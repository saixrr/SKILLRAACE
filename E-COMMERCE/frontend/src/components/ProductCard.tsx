// src/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 text-center shadow-md transition-transform transform hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
