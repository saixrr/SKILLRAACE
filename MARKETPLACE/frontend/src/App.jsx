import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/navbar'
import MarketplaceDashboard from './pages/dashboard/Dashboard'
import Footer from './pages/dashboard/Footer'

function App() {
  

  return (
    <div className='App'>
       <Navbar /> 
       <MarketplaceDashboard />
       <Footer/>
    </div>
  )
}

export default App
