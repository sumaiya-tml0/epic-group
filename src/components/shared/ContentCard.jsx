import React from 'react'

export default function ContentCard({ imageSrc, title, children, reverse }) {
  return (
     <div className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse flex-col-reverse' : ''} items-center`}>
      <div className="w-full md:h-[600px] lg:w-1/2 overflow-hidden group">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full  object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
      </div>
     
      <div className="w-full lg:w-1/2 lg:px-[7%] pt-[60px] px-4">
        <h2 className="text-[28px] font-bold mb-5 text-black leading-tight">{title}</h2>
        <p className=" leading-relaxed text-[17px]">{children}</p>
      </div>
    </div>
  )
}
