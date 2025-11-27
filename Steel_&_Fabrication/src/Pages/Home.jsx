import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className=' w-full min-h-screen bg-gray-900 text-white'>
      <Navbar />
      <Header />
      <Banner />
      <ProductCard />
      <Footer />
    </div>
  )
} 
