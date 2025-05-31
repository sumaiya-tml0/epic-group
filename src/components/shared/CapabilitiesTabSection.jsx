import React from 'react'
import CapabilitiesTabItem from './CapabilitiesTabItem'

export default function CapabilitiesTabSection( {introTitle, introText, items }) {
  return (
     <div className="lg:px-4 lg:pb-8">
    <h2 className="text-3xl font-bold mb-4 text-black text-center">{introTitle}</h2>
    <div className='h-7'></div>
    <p className="mb-6 whitespace-pre-line text-center text-lg">{introText}</p>
    {items.map((item, index) => (
      <CapabilitiesTabItem key={index} {...item} reverse={index % 2 !== 0} />
    ))}
  </div>
  )
}
