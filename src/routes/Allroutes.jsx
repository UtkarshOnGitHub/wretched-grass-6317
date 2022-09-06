import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListPages from '../component/productsDisplay/listPages'
import Cart from './Bag/cart'
import Wishlist from './Bag/wishlist'
import Home from './Home/Home'
import PrivateRoutes from './PrivateRoutes'
import ProductDetail from './productDetail'
import Men from './Products/men'
import Women from './Products/Women'

const Allroutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/women" element={
              <Women/>
            }></Route>
            <Route path="/men" element={
            <Men/>
            }></Route>
            <Route path="/category" element={
              <PrivateRoutes>
            <ListPages/>
            </PrivateRoutes>
            }></Route>
            <Route path=":name/:id" element={
              <PrivateRoutes>
            <ProductDetail/>
            </PrivateRoutes>
            }></Route>
            <Route path="/cart" element={
              <PrivateRoutes>
            <Cart/>
            </PrivateRoutes>
            }></Route>
            <Route path="/wishlist" element={
              <PrivateRoutes>
            <Wishlist/>
            </PrivateRoutes>
            }></Route>
        </Routes>
  )
}

export default Allroutes
