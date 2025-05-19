import React from 'react'

function BannerText() {
  return (
    <div className=' md:max-w-[800px] mx-auto relative'>
        <div className='px-5 lg:px-0 flex flex-col items-center justify-center text-center text-white absolute -top-68 md:-top-52 space-y-6 z-10'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Our Relentless Pursuit of Better.</h1>
        <p className='text-sm md:text-base lg:text-xl leading-6 md:leading-8'>Since 2005 the Epic Group has been dedicated to ever higher standards in
value-added, world-class manufacturing of apparel, delivering quality, value and
innovation with unfailing reliability for our customers internationally.</p>
<button className='capitalize bg-[#284dae] px-10 py-3 rounded-4xl cursor-pointer transition duration-300 transform hover:bg-white hover:text-[#284dae] hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:-translate-y-0.5'>Discover more</button>
        </div>
    </div>
  )
}

export default BannerText