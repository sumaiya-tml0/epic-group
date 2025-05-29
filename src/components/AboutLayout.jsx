import React from 'react'
import AboutUs from './AboutPage/AboutUs'
import LeaderShip from './AboutPage/LeaderShip'

export default function AboutLayout() {
  return (
    <>
    <section className='max-w-[1250px] mx-auto lg:pt-10'>
    <AboutUs/>
    </section>
    <LeaderShip/>
    </>
  )
}
