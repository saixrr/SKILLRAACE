import React, { useState } from 'react';

const ProductForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | string>('');
  const [stockQuantity, setStockQuantity] = useState<number | string>('');
  const [categoryId, setCategoryId] = useState<number | string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !price || !stockQuantity || !categoryId) {
      setError('Name, price, stock quantity, and category ID are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          description: description,
          price: price,
          stock_quantity: stockQuantity,
          category_id: categoryId,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Product creation failed. Response:', response.status, errorData);
        setError(errorData.errors);
        return;
      }

      console.log('Product creation successful');

      const data = await response.json();
      console.log(data);
      // Optionally reset form fields
      setName('');
      setDescription('');
      setPrice('');
      setStockQuantity('');
      setCategoryId('');
    } catch (error) {
      console.error('Product creation failed:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Product Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Description:</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Price:</label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Stock Quantity:</label>
          <input
            type="number"
            name="stockQuantity"
            id="stockQuantity"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Category ID:</label>
          <input
            type="number"
            name="categoryId"
            id="categoryId"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
        </div>
        {error && (
          <div className="text-red-500">{error}</div>
        )}
        <button
          type="submit"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
