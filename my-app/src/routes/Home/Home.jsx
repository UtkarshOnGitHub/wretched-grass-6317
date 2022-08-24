import React from 'react'
import Dropdown from '../../component/droDownNav/Dropdown'
import MiddleComp from '../../component/middleSection/MiddleComp'
import Navbar from '../../component/navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Dropdown/>
      <MiddleComp/>
    </div>
  )
}

export default Home
