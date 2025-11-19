import React from 'react'
import product1 from '../assets/Images/product1.webp'
import product2 from '../assets/Images/product2.webp'
import product3 from '../assets/Images/product3.webp'
import product4 from '../assets/Images/product4.webp'
import pr5 from '../assets/Images/pr5.webp'
import pr6 from '../assets/Images/pr6.webp'
import pr7 from '../assets/Images/pr7.jpeg'
import pr8 from '../assets/Images/pr8.jpg'

export default function ProductCard() {
    return (
        <div className='m-4 h-auto'>
            <div className='flex justify-around items-center min-h-100 mt-4'>
                <div className='items-center h-100 w-60 bg-purple-200 rounded-md'>
                    <img src={product1} alt="product1" className='h-50 mt-4' />
                </div>
                <div className='items-center h-100 w-60 bg-purple-200 rounded-md'>
                    <img src={product2} alt="product2" className='h-50 mt-4' />
                </div>
                <div className='items-center h-100 w-60 bg-purple-200 rounded-md'>
                    <img src={product3} alt="product3" className='h-50 w-full mt-4' />
                </div>
                <div className='items-center h-100 w-60 bg-purple-200 rounded-md'>
                    <img src={product4} alt="product4" className='h-50 mt-4' />
                </div>
            </div>
            <div className='flex justify-around items-center min-h-100  mt-4'>
                <div className='items-center h-100 w-60 bg-purple-200 rounded-md'>
                    <img src={pr5} alt="product5" className='h-50 w-full mt-4' />
                </div>
                <div className='items-center h-100 w-60 bg-purple-200 rounded-md'>
                    <img src={pr6} alt="product6" className='h-50 w-full mt-4' />
                </div>
                <div className='items-center h-100 w-60 bg-purple-200 rounded-md    '>
                    <img src={pr7} alt="product7" className='h-50 w-full mt-4' />
                </div> 
                <div className='items-center h-100 w-60 bg-purple-200 rounded-md'>
                    <img src={pr8} alt="product8" className='h-50 w-full mt-4' />
                </div> 
            </div>
        </div>
    )
}
