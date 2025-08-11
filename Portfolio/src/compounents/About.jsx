import React from 'react'
import myImage from '../assets/Chandru_img2.jpg'; 

function About() {
  return (
    <section id='about' className='py-24 bg-slate-950 relative overflow-hidden'>
        {/* Animation background Elements */}
        <div className='absolute inset-0'>
            <div className='absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full
            blur-3xl'></div>
            <div className='absolite bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full
            blur-3xl'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            2 w-full h-full bg-gradient-to-r from-transparent via-green-600/s to-transparent'></div>
        </div>

        <div className='container mx-auto px-6 py-4'>
            <div className='container px-6 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-16 items-space'>
                    {/* Image in leftside */}
                    <div className={`relative transition-all duration-1000 `}>
                        <div className='relative group'>
                            <div className='w-full max-w-md mx-auto'>
                                <div className='relative border-4 border-green-500 rounded-2xl p-2
                                group-hover:border-green-400 transition-all duration-300'>
                                     <img src={myImage} alt="" className='w-full rounded-2xl shadow-2xl transition-all duration-500
                                    group-hover:scale-105'/>
                                    <div className='absolute -top-6 -right-6 w-12 h-12 bg-red-600/20
                                    rounded-full'></div>
                                    <div className='absolute -bottom-6 -left-6 w-8 h-8 bg-blue-600/20
                                    rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Rightside content */}
                    <div className={`space-y-8 transition-all duration-1000 delay-300`}>
                        <div className='space-y-4'>
                            <p className='text-green-400 font-semibold text-lg'>About Me </p>
                            <h2 className='text-4xl md:text-5xl text-white font-bold animate-slide-up'>
                            Why hire me for your<br />
                            <span>next project?</span>
                            </h2>
                            <p className='text-green-400 font-semibold delay-200 animate'>
                            Full Stack Devloper
                            </p>
                        </div>
                        <div className='space-y-6 text-gray-300 leading-relaxed'>
                            <p className={`grid grit-cols-2 gap-8 py-6 transition-all duration-1000
                                dealy-500 `}>
                                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis magnam totam aliquam ipsa. At reiciendis quo aut beatae earum, ducimus distinctio excepturi soluta. Officia praesentium a sit inventore fugit! Numquam beatae ex illo incidunt alias? Reiciendis quam optio, laborum cumque et aliquam atque sapiente ipsam!
                            </p>
                            <p className={`transition-all duration-1000 delay-700`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt provident reiciendis quod, hic sapiente sunt distinctio aliquam eaque praesentium temporibus placeat expedita ipsum numquam, beatae cum nobis minus sint voluptates.
                            </p>
                        </div>
                        <div 
                        className={`grid grid-cols-2 gap-8 py-6 transition-all duration-1000
                            dealy-500`}
                        >
                            <div className='group'>
                            <p className='text-white font-semibold group-hover:text-green-400
                                transition-all duration-300'>
                                Name
                                </p>
                                <p className='text-gray-300'>Chandru J</p>
                            </div>
                            <div className='group'>
                                <p className='text-white font-semibold group-hover:text-green-400
                                transition-all duration-300'>Location</p>
                                <p className='text-gray-300'>
                                    Chennai
                                </p>
                            </div>
                            <div className='group'>
                                <p className='text-white font-semibold group-hover:text-green-400
                                transition-all duration-300'>Date of Birth</p>
                                <p className='text-gray-300'>
                                    05 March, 2002
                                </p>
                            </div>
                            <div className='group'>
                                <p className='text-white font-semibold group-hover:text-green-400
                                transition-all duration-300'>Email:</p>
                                <p className='text-gray-300'>
                                    chandrujayakumar987@gmail.com
                                </p>
                            </div>

                        </div>
                        <div className='flex flex-wrap gap-4 transition-all duration-1000 delay-1100'>
                            <button className='bg-green-600 text-white px-8 py-3 rounded-lg
                            hover:bg-green-700 transition-all duration-300 font-medium shadow-lg
                            hover:shadow-xl hover:scale-105'>
                                Download
                            </button>
                            <button className='border-2 border-slate-600 text-white px-8 py-3 rounded-l
                            hover:border-green-600 hover:text-green-400 transition-all duration-300
                            font-medium hover:scale-105'>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About