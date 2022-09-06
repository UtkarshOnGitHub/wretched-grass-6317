import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getMenProducts } from '../../api/api'
import Dropdown from '../../component/droDownNav/Dropdown'
import Footer from '../../component/footer/footer'
import Sorting from '../../component/functionality/Sorting'
import Navbar from '../../component/navbar/Navbar'
import Loading from '../../component/productsDisplay/loading'
import Pagination from '../../component/productsDisplay/pagination'
import ProductsDisplay from '../../component/productsDisplay/ProductsDisplay'

const Men = () => {  
    const [products , setProducts] = useState([])
    const [searchParams , setSearchParams] = useSearchParams()

    const [page, setPage] = useState(1);
    const [isLoading , setIsLoading] = useState(true)
    const getData=()=>{
      setIsLoading(true)
      getMenProducts({
        limit:16,
        page:page
      }).then((res)=>{
        
        setProducts(res.data)
        setIsLoading(false)
      }).catch((err)=>{
        console.log(err);
        setIsLoading(false)
      })
    }
  
    useEffect(()=>{
      getData()
    },[page])
  
    console.log(isLoading)
    const handleSetPage=(value)=>{
        setPage(value)
    }
    const handlepropSort=(value)=>{
      setProducts([...value])
      // setSearchParams({query:"sorting"})
    }
  return (
    <div>
        <Navbar/>
        <Dropdown/>
        <Sorting handlepropSort={handlepropSort} data={products}/>
        {isLoading ? <Loading/> : <ProductsDisplay data={products}/>}
        <Pagination page={page} handleSetPage={handleSetPage}/>
        <Footer/>
    </div>
  )
}

export default Men
