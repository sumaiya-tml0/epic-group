import React from 'react'
import Banner from './banner/Banner'
import Sustainability from './sustainablity/Sustainability'
import Latest from './latest/Latest'
import Certifications from './Certifications'
import About from './about/About'

export default function Home() {
  return (
    <>
     <main>
      <section className='max-w-[1250px] mx-auto'>
        <About/>
      </section>
    </main>
    <Sustainability/>
    <Latest/>
    <Certifications/>
    </>
  )
}
