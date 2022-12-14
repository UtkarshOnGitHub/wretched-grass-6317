import {
  Box, Button, Flex, Image, SimpleGrid, Text, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { addToCart, addToWishList, getProductsWithID, getuser } from '../api/api'
import Dropdown from '../component/droDownNav/Dropdown'
import Footer from '../component/footer/footer'
import TransitionExample from '../component/modals/modalcart'
import Navbar from '../component/navbar/Navbar'
import Loading from '../component/productsDisplay/loading'




const ProductDetail = () => {
  const toast = useToast()
  let token = localStorage.getItem("asos-token") || null
  const { name ,id } = useParams();
  // console.log(name,id)
  const [productDetail, setProductDetail] = useState({})
  const [clicked , setClicked] = useState(false)
  const [loading, setLoading] = useState(true)

  const getData = () => {
    getProductsWithID(id).then((res) => {
      setLoading(true)
      setProductDetail({ ...res.data.data })
      setLoading(false)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getData()
  }, [])


  const handleCart=(id)=>{
    getuser(token).then((res)=>{
      addToCart(id,res.data.id).then((response)=>{
        console.log(response);
        toast({
          title: `Item Added To Cart`,
          position: `top-right`,
          isClosable: true,
          duration: 3000
        })
      }).catch((err)=>{
        console.log(err)
      })
    })


  }
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const handleWishlist=()=>{
    addToWishList(productDetail).then((res)=>{
      console.log(res)
      toast({
        title: `Item Added To WishList`,
        position: `top-right`,
        isClosable: true,
        duration: 3000
      })
    })
  }


  // console.log(productDetail)
  return (
    <div>
      <Navbar />
      <Dropdown />
      {loading == true ? <Loading/>:<SimpleGrid w="80%" margin="auto" columns={[1, 1, 2]} justifyContent="center">
        <Box marginTop="20px" w="90%">
          <Image src={productDetail.img} w="100%" h="90%" />
        </Box>
        <Box marginTop="20px" padding="20px" h="90%">
          <Box marginTop="30px">
            <Text fontSize="3xl" textAlign="left">{productDetail.title}</Text></Box>
          <Box marginTop="30px" textAlign="left">
            <Text as="mark" fontSize="2xl"  >MRP: $ {productDetail.rate}</Text>
          </Box>
          <Box marginTop="30px">
            <Text fontSize="2xl" textAlign="left" >Discount : {productDetail.discount}</Text>
          </Box>
          <Box textAlign="left" marginTop="30px">
            <Text as="i" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum repellat, earum deserunt corrupti deleniti cupiditate dolorem illum! Sed temporibus vel culpa distinctio ipsum cupiditate commodi saepe, aliquid, nesciunt, sapiente pariatur?</Text>
          </Box>
          <Box marginTop="30px">
            <Button bg="#018849" color="white" w="50%" onClick={()=>{handleCart(productDetail._id)}}>Add To Cart</Button>
          </Box>
          <Box marginTop="30px">
            <Button bg="#018849" color="white" w="50%" onClick={handleWishlist}>Add To WishList</Button>
          </Box>
        </Box>
      </SimpleGrid>}
      <Box>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  About Product
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            Fashion product development (PD) is a complex process with activities extending out from the designer's concept through making the style ready for production. PD models assist in understanding these activities that need to be accomplished by various members of the development team at different tight time schedules so that the product is ready to satisfy market demand. The tools and technologies play a major role in determining the efficiency of each task in the PD process, in addition to effective communication among members involved in the process. The apparel PD process has been challenged by new business processes such as fast fashion, for which demand-led PD strategies must be implemented.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Find More About Us
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <TransitionExample clicked={clicked}/>
      <Footer />
    </div>
  )
}

export default ProductDetail
