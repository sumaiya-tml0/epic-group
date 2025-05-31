import React from 'react'

function ImageOverlayCard({ image, title }) {
  return (
     <div className="relative group cursor-pointer overflow-hidden rounded-xl bottom-28">
      <img src={image} alt={title} className="w-full h-[320px] object-cover " />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 z-10 text-white text-3xl">
        Our <br />{title}
      </div>
    </div>
  )
}

export default ImageOverlayCard