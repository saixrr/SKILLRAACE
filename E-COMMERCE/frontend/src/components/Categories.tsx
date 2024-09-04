import React from 'react';

const Categories: React.FC = () => {
  const categories = ['Phones', 'Computers', 'Gaming', 'Home & Kitchen', 'Fashion'];

  return (
    <section className="categories">
      <h2 style={{color:'black'}}>Browse By Category</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div style={{color:'blue'}} key={index} className="category-item">
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
