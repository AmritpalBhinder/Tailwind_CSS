import React from 'react'
import banner1 from '../assets/Images/banner1.png'

export default function Banner() {
  return (
    <div className="w-300 h-150 flex justify-center bg-yellow-300 mt-2 translate-x-25">
      <img src={banner1} alt="banner" className='h-full w-full scale-100' />
    </div>
  )
}
