import React, { useEffect, useState } from 'react'
import { Menu,X } from "lucide-react";


function Header() {
      
      const [isMenuOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if(element){
          element.scrollIntoView({ behavior: "smooth"});
        }
        setIsOpen(false);
      } ;

      const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contect", href: "#contact" },

      ]
  return (
    <header className= {`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ?"bg-slate-950 backdrop-blur-lg shadow-lg border-b border-slate-800"
        : "bg-transparent"
    }`}
    >
     
      <div className='container mx-auto px-5 py-4'>
      <div className='flex items-center justify-between'>
      <div className='text-2xl font-bold'>
        <span className='text-green-400'>CHANDRU</span>
        <span className='text-white'>JAYAKUMAR</span>
        <span className='text-green-400'>.</span>
      </div>


      {/*Desktop Menus */}
      <nav className='hidden md:flex space-x-8'>
      {navItems.map((item, intex)=>{
        return (
         <button className='text-gray-300 hover:text-green-400 transition-all duration-300
            font-medium relative group' style={{animationDelay: `${intex * 0.1}s`}}>
          {item.name}
          <span className='absolute -bottom-2 left-0 w-0 h-0.5 bg-green-400
          transition-all duration-300 group-hover:w-full'></span>
          </button>
        );
      })}
      </nav>

      <button className='hidden md:flex items-center gap-2 bg-green-600 text-white px-6 
      py-2.5 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium
      shadow-lg hover:shadow-xl hover:scale-105'>
        Download CV
      </button>

      {/* for Mobile Menu */}
      <button 
        className='text-white md:hidden' 
        onClick={() => setIsOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24}/>}
      </button>
      </div>
      {/* Mobile Navigation */}
      <nav
  className={`
    md:hidden overflow-hidden transition-all duration-500 ease-in-out 
    bg-slate-800 rounded-lg shadow-lg mt-4 border-t border-slate-800 pt-4
    ${isMenuOpen ? "max-h-[500px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"}
  `}
>
        {navItems.map((item) => {
          return (
            <button className='block w-fll text-left py-3 px-4 text-gray-300
            hover:text-green-400 hover:bg-slate-700 transition-all duration-300
            ease-in-out rounded-lg'>
              {item.name}
            </button>
          )
        })}


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