import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListPages from '../component/productsDisplay/listPages'
import Cart from './Bag/cart'
import Wishlist from './Bag/wishlist'
import Home from './Home/Home'
import ProductDetail from './productDetail'
import Men from './Products/men'
import Women from './Products/Women'

const Allroutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/women" element={<Women/>}></Route>
            <Route path="/men" element={<Men/>}></Route>
            <Route path="/category" element={<ListPages/>}></Route>
            <Route path=":name/:id" element={<ProductDetail/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/wishlist" element={<Wishlist/>}></Route>
        </Routes>
  )
}

export default Allroutes
