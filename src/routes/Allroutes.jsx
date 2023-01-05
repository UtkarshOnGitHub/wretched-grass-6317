import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListPages from '../component/productsDisplay/listPages'
import SignUpAcc from '../component/signup/SignUpAcc'
import Cart from './Bag/cart'
import Wishlist from './Bag/wishlist'
import Home from './Home/Home'
import PrivateRoutes from './PrivateRoutes'
import ProductDetail from './productDetail'
import Men from './Products/men'
import Women from './Products/Women'
import Profile from './Profile'


let auth = localStorage.getItem("asos-token") || null;

const Allroutes = () => {

  return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/women_products" element={
              <Women/>
            }></Route>
            <Route path="/signup" element={<SignUpAcc/>}></Route>
            <Route path="/men_products" element={
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
            {/* <Route path="/wishlist" element={
              <PrivateRoutes>
            <Wishlist/>
            </PrivateRoutes>
            }></Route> */}
            <Route path="/profile" element={
              <PrivateRoutes>
                <Profile/>
              </PrivateRoutes>
            }>
            </Route>
        </Routes>
  )
}

export default Allroutes
