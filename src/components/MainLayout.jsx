import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Banner from './banner/Banner'

export default function MainLayout() {
  return (
    <>
    <Header/>
    <Banner/>
    <Outlet/>
    <Footer/>
    </>
  )
}
