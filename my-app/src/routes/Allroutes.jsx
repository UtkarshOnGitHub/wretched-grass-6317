import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListPages from '../component/productsDisplay/listPages'
import Home from './Home/Home'
import Women from './Products/Women'

const Allroutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/women" element={<Women/>}></Route>
            <Route path="/men" element={<h1>Men Page</h1>}></Route>
            <Route path="/category" element={<ListPages/>}></Route>
        </Routes>
  )
}

export default Allroutes
