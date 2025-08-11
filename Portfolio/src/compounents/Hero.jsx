import React from 'react'

function Hero() {
  return (
    <section
    id="home"
    className='min-h-screen flex items-center bg-gradient-to-br from-slate-900
    to-slate-900 pt-20 relative overflow-hidden'
    >
        {/*Animation for background elements*/}
        <div className='absolute inset-0'>
            <div className='absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full
            blur-3xl'></div>
            <div className='absolite bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full
            blur-3xl'></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            2 w-full h-full bg-gradient-to-r from-transparent via-green-600/s to-transparent'></div>
        </div>

        <div className='container mx-auto px-6 py-20 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-16 items-center'>
                {/* Left Content */}
                <div className='space-y-8'>
                    <div className='space-y-4'>
                        <p
                        className={`text-green-400 font-semibold text-lg transition-all
                        duration-1000`}>
                            Get Read to Start Work
                        </p>
                    </div>

                </div>
            </div>

        </div>
    </section>
  )
}
 
export default Hero