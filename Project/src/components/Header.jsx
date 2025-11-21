import React from 'react'

export default function Header() {
  return (
    <div className="w-full h-16 bg-blue-600 text-white flex items-center justify-evenly sm:w-auto mobile:flex-col mobile:h-20 m-auto">
      <div>
        <h1 className="text-2xl font-bold">Gurukrupa Steel And Fabrication</h1>
      </div>
      <div className='ml-4 mobile:hidden'>
        <p className="text-md">We Build The Future</p>
      </div>
    </div>
  )
}
