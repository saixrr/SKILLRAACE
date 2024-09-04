import React from 'react';
import ProductForm from './ProductForm';

const AddProductPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Add New Product</h1>
      <ProductForm />
    </div>
  );
};

export default AddProductPage;
