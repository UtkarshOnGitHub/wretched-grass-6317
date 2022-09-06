import React from 'react'
import Dropdown from '../../component/droDownNav/Dropdown'
import Section from '../../component/Section/section'
import MiddleComp from '../../component/middleSection/MiddleComp'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/footer'
import { useEffect } from 'react'
import { useState } from 'react'
import { InitialFocus } from '../../component/modals/signUpModal'
import { useContext } from 'react'
import { AppContext } from '../../context/AuthContextProvider'
import { AlertDialogExample, DrawerExample } from '../../component/modals/notLoginModal'
import styled from '@emotion/styled'
import style from "./style.module.css"





const Home = () => {


  const [state , setState] = useState(false)
  const {isAuth, profileModal ,setProfileModal} = useContext(AppContext)


  useEffect(()=>{
    if(!isAuth){
      const id=setInterval(()=>{
        setState(true)
        clearInterval(id)
    },5000)
    }

  },[])



  return (
    <div>
      <Navbar/>
      <Dropdown/>
      <InitialFocus openNow={state} setClose={setState}/>
      <DrawerExample login={profileModal} setLogin={setProfileModal}/>
      <MiddleComp/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default Home


