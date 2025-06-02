import React from 'react'
import CapabilitiesTabItem from './CapabilitiesTabItem'
import reduced from '../../assets/sustainabilityPage/reduced.png'
import { useLocation } from 'react-router-dom'

export default function CapabilitiesTabSection( {introTitle, introText, items, tabType }) {
  const location = useLocation()
  const isCapabilities = location.pathname === '/our-capabilities'
  return (
     <div className=" lg:pb-8">
    <h2 className="text-3xl font-bold mb-4 text-black text-center">{introTitle}</h2>
    <div className='h-7'></div>
    <p className="mb-6 whitespace-pre-line text-center text-lg">{introText}</p>
    {
      !isCapabilities && tabType === "environmental" &&<div>
        <div className='h-7'></div>
        <h1 className='mb-4 text-[32px] font-bold text-black text-center'>2019-2020 We reduced:</h1>
        <div className='h-7'></div>
      <img src={reduced} alt="" />
    </div>
    }
    {items.map((item, index) => (
      <CapabilitiesTabItem key={index} {...item} reverse={index % 2 !== 0} />
    ))}
  </div>
  )
}
