import React from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import FlashSales from '../../components/FlashSales';
import Categories from '../../components/Categories';
import BestSelling from '../../components/BestSelling';
import ProductGrid from '../../components/ProductGrid';
import Footer from '../../components/Footer';
import '../../App.css'

function Dashboard() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <FlashSales />
      <Categories />
      <BestSelling />
      <ProductGrid title="Explore Our Products" />
      <ProductGrid title="New Arrival" />
      <Footer />
    </div>
  );
}

export default Dashboard;
