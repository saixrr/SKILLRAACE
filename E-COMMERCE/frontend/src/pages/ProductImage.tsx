import React, { useState } from 'react';

const ProductImageForm: React.FC = () => {
  const [productId, setProductId] = useState<number | string>('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!productId || !imageUrl) {
      setError('Product ID and Image URL are required.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/products/${productId}/images`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image_url: imageUrl,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Image upload failed. Response:', response.status, errorData);
        setError(errorData.errors);
        return;
      }

      console.log('Image upload successful');

      const data = await response.json();
      console.log(data);
      // Optionally reset form fields
      setProductId('');
      setImageUrl('');
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Product ID:</label>
          <input
            type="number"
            name="productId"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
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
          Add Image URL
        </button>
      </form>
    </div>
  );
};

export default ProductImageForm;
