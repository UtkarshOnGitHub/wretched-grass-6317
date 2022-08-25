import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getWomenProducts } from '../../api/api'
import Dropdown from '../../component/droDownNav/Dropdown'
import Footer from '../../component/footer/footer'
import Navbar from '../../component/navbar/Navbar'
import Loading from '../../component/productsDisplay/loading'
import Pagination from '../../component/productsDisplay/pagination'
import ProductsDisplay from '../../component/productsDisplay/ProductsDisplay'

const Women = () => {

  const [products , setProducts] = useState([])

  const [page, setPage] = useState(1);
  const [isLoading , setIsLoading] = useState(true)

  useEffect(()=>{
    setIsLoading(true)
    getWomenProducts({
      limit:16,
      page:page
    }).then((res)=>{
      
      setProducts(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err);
      setIsLoading(false)
    })
  },[page])

  console.log(isLoading)
  const handleSetPage=(value)=>{
      setPage(value)
  }

  return (
    <div>
      <Navbar/>
      <Dropdown/>
      {isLoading ? <Loading/> : <ProductsDisplay data={products}/>}
      <Pagination page={page} handleSetPage={handleSetPage}/>
      <Footer/>
    </div>
  )
}

export default Women
