import React from 'react'
import Dropdown from '../../component/droDownNav/Dropdown'
import Section from '../../component/Section/section'
import MiddleComp from '../../component/middleSection/MiddleComp'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/footer'
import { useEffect } from 'react'






const Home = () => {

  return (
    <div>
      <Navbar/>
      <Dropdown/>
      <MiddleComp/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default Home


