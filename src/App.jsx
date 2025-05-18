import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Footer from './components/Footer'
import Certifications from './components/Certifications'
import Sustainability from './components/sustainablity/Sustainability'
import Latest from './components/latest/Latest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Banner/>
    <main>
      <section className='max-w-[1250px] mx-auto'>
        <About/>
      </section>
    </main>
    <Sustainability/>
    {/* <Latest/> */}
    <Certifications/>
    <Footer/>
    </>
  )
}

export default App
