import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Allroutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/women" element={<h1>Women Page</h1>}></Route>
            <Route path="/men" element={<h1>Men Page</h1>}></Route>
        </Routes>
  )
}

export default Allroutes
