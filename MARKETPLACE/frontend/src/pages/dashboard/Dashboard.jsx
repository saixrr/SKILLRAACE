import React, { useState, useEffect } from 'react';

// Define your products and types
const products = [
  { id: 1, name: "Product 1", price: "$29.99", imageUrl: "https://m.media-amazon.com/images/I/812Qr+6phJL._AC_SY400_.jpg", type: "Mobiles" },
  { id: 2, name: "Product 2", price: "$49.99", imageUrl: "https://m.media-amazon.com/images/I/31QtmxE888L._AC_UY416_QL65_.jpg", type: "Laptops" },
  { id: 3, name: "Product 3", price: "$19.99", imageUrl: "https://m.media-amazon.com/images/I/61pBGWvM8EL._AC_UY436_QL65_.jpg", type: "Books" },
  // Add more products as needed
];

const Product_types = [
  { id: 1, name: "All" },
  { id: 2, name: "Mobiles" },
  { id: 3, name: "Laptops" },
  { id: 4, name: "Books" }
];

const MarketplaceDashboard = () => {
  const [selectedType, setSelectedType] = useState('All');
  
  // Handle filter change
  const handleFilterChange = (type) => {
    setSelectedType(type);
  };

  // Filter products based on selected type
  const filteredProducts = selectedType === 'All'
    ? products
    : products.filter(product => product.type === selectedType);

  // Initialize carousel functionality
  useEffect(() => {
    // Example JavaScript for carousel initialization
    const carousel = document.getElementById('default-carousel');
    if (carousel) {
      const prevButton = carousel.querySelector('[data-carousel-prev]');
      const nextButton = carousel.querySelector('[data-carousel-next]');
      const slides = carousel.querySelectorAll('[data-carousel-item]');
      let currentSlide = 0;

      const showSlide = (index) => {
        slides.forEach((slide, i) => {
          slide.classList.toggle('hidden', i !== index);
        });
        currentSlide = index;
      };

      const prevSlide = () => {
        showSlide((currentSlide - 1 + slides.length) % slides.length);
      };

      const nextSlide = () => {
        showSlide((currentSlide + 1) % slides.length);
      };

      prevButton.addEventListener('click', prevSlide);
      nextButton.addEventListener('click', nextSlide);

      // Show the first slide initially
      showSlide(currentSlide);
    }
  }, []);

  return (
    <div className="p-16 border border-gray-100 shadow-sm rounded-md w-screen mt-16 mb-4 relative">
        <h2 className="text-3xl font-bold text-white-800 mb-4">Flash Sales</h2>
      {/* Carousel */}
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
    <div className="relative overflow-hidden rounded-lg md:h-96 h-1/4">
      {/* Carousel items */}
      <div className="duration-700 ease-in-out" data-carousel-item>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/GW/BAU/May/Budget/PC_Hero_3000x1200_BS_PC._CB558386585_.jpg" className="absolute top-0 left-1/2 w-full h-full object-cover -translate-x-1/2" alt="Slide 1" />
      </div>
      <div className="duration-700 ease-in-out hidden" data-carousel-item>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg" className="absolute top-0 left-1/2 w-full h-full object-cover -translate-x-1/2" alt="Slide 2" />
      </div>
      <div className="duration-700 ease-in-out hidden" data-carousel-item>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24hp/urec/hero/Under1499_Tallhero_3000x1200._CB568928188_.jpg" className="absolute top-0 left-1/2 w-full h-full object-cover -translate-x-1/2" alt="Slide 3" />
      </div>
      <div className="duration-700 ease-in-out hidden" data-carousel-item>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg" className="absolute top-0 left-1/2 w-full h-full object-cover -translate-x-1/2" alt="Slide 4" />
      </div>
    </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        <button type="button" className="absolute top-0 start-0 z-30 dark:text-gray-800 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-black-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-black-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Filter Controls */}
      <div className="flex">
  {/* Left Side: Filter Controls and Products Carousel */}
  <div className="w-1/2 p-4">
    {/* Filter Controls */}
    <div className="mb-4">
      <div className="flex space-x-3">
        {Product_types.map((p_type) => (
          <button
            key={p_type.id}
            onClick={() => handleFilterChange(p_type.name)}
            className={`py-2 px-4 rounded-full ${selectedType === p_type.name ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'} hover:bg-blue-600`}
          >
            {p_type.name}
          </button>
        ))}
      </div>
    </div>

    {/* Products Carousel */}
    <div className="relative">
      <div className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 overflow-x-auto flex">
        {filteredProducts.map((product) => (
          <div key={product.id} className="carousel-item border border-gray-200 rounded-lg p-4 w-60 bg-white shadow-md dark:bg-gray-800 dark:border-gray-700 flex-none">
            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{product.name}</h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">{product.price}</p>
            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200">
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200">
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>

  {/* Right Side: Products with 60% Off */}
  <div className="w-1/2 p-4">
    <h2 className="text-2xl font-bold mb-4">Products with 60% Off</h2>
    <div className="grid grid-cols-2 gap-4">
      {filteredProducts // Filter products with at least 60% off
        .map((product) => (
          <div key={product.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{product.name}</h3>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">Original Price: <span className="line-through">{product.originalPrice}</span></p>
            <p className="text-lg font-medium text-red-500 mb-4">Discounted Price: {product.price}</p>
          </div>
          
        ))}
    </div>
  </div>
  {/* <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200">
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200">
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button> */}
</div>

    </div>
  );
};

export default MarketplaceDashboard;
