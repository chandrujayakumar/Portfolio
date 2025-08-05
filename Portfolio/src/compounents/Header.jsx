import React from 'react'
import { Menu } from "lucide-react";


function Header() {

      

  return (
    <header className={'fixed top-0 left-0 right-0 z-50 transition-all duration-500'}>
      <div className='container mx-auto px-5 py-4'>
      <div className='flex items-center justify-between'>
      <div className='text-2xl font-bold'>
        <span className='text-green-400'>CHANDRU</span>
        <span className='text-white'>JAYAKUMAR</span>
        <span className='text-green-400'>.</span>
      </div>


      {/*Desktop Menus */}
      <nav className='hidden md:flex space-x-8'>
      {/* later */}
      </nav>
      <button className='hidden md:flex items-center gap-2 bg-green-600 text-white px-6 
      py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium
      shadow-lg hover:shadow-xl hover:scale-105'>
        Download CV
      </button>

      {/* for Mobile Menu */}
      <button className='text-white md:hidden'>
        <Menu size={24}/>
      </button>
      </div>
      {/* Mobile Navigation */}
      <nav className='md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-slate-800
      rounded-lg shadow-lg'>
        {/* Later */}
       {/*Container aligned to the top-right corner --> */} 


        <button className='mt-4 w-full flex items-center justify-center gap-2 bg-green-600
        text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300'>
          Download CV mob
        </button> 
      </nav>
      </div>
    </header>
  )
}

export default Header