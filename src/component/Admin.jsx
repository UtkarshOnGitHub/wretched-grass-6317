import { useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getadmin } from '../api/api'
import SimpleSidebar from './Adminwork'
import Dropdown from './droDownNav/Dropdown'
import Footer from './footer/footer'
import Navbar from './navbar/Navbar'
import Loading from './productsDisplay/loading'

const Admin = () => {
    let token = localStorage.getItem("asos-token")




  return (
    <>
        <Navbar/>
        <Dropdown/>
        {/* <SimpleSidebar/> */}
        <Footer/>
    </>
  )
}

export default Admin
