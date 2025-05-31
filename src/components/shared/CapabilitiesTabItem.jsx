import React from 'react'

export default function CapabilitiesTabItem({ title, description, image, reverse }) {
  return (
     <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse flex-col-reverse' : ''} gap-10 items-center my-8`}>
    <div className="md:w-1/2">
      <img src={image} alt={title} />
    </div>
    <div className="md:w-1/2 ">
      <div className={`lg:w-[83%] ${!reverse ? ' justify-self-end' : ''}`}>
        <h3 className="text-[28px] font-bold mb-3.5 text-black">{title}</h3>
      <p className=" leading-relaxed text-lg whitespace-pre-line">{description}</p>
      </div>
    </div>
  </div>
  )
}
