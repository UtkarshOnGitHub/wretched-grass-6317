import {
  Box, SimpleGrid, Image, Text, Button, ButtonGroup, Table,
  Thead,
  Tfoot,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import { countCart, delFromCart, getCart } from '../../api/api'
import Dropdown from '../../component/droDownNav/Dropdown'
import Footer from '../../component/footer/footer'
import Navbar from '../../component/navbar/Navbar'
import style from "./cart.module.css"
import { CgRemove } from "react-icons/cg"
import TransitionExample from '../../component/modals/modalcart'

const Cart = () => {
  const [cartItem, setCartItem] = useState([])
  const [count, setCount] = useState(1);
  const [total ,setTotal] = useState(0)

  const getData = () => {
    getCart().then((res) => {
      setCartItem([...res.data])

    }).catch((err) => {
      console.log(err)
    })
  }
  let total1 =0
  useEffect(()=>{
    cartItem.map((e)=>{
      // console.log(e.data.rate)
      total1 = e.qty*(total1+e.data.rate)
    })
    setTotal(total1)
  },[cartItem])


  useEffect(() => {
    getData()
  }, [])


  const handleDelete=(value)=>{
    delFromCart(value).then((res)=>{
      console.log(res)
      getData()
    }).catch((err)=>{
      console.log(err)
    })
    
  }
  const handlePatch=(id, qty,value)=>{
    countCart(id,qty,value).then((res)=>{
        console.log(res)
        getData()
    })
  }
  if(cartItem.length===0){
    return(
      <div>
      <Navbar />
      <Dropdown />
      <Box display="flex" justifyContent="center" w="100%" margin="auto">
        <Image src="https://careerindex.co.in/assets/images/emptycart.png"/>
      </Box>
      <Footer/>
      </div>
    )
  }
  return (
    <div>
      <Navbar />
      <Dropdown />
      <div>
        <SimpleGrid>
          <Box className={style.box2}>
            <Text fontSize="3xl">Total Amount</Text>
            <TableContainer className={style.table}>
              <Table variant='simple' >
                <TableCaption><Text as="mark" fontSize="2xl">Your Total Amount is ${total+60}</Text></TableCaption>
                <Thead>
                  <Tr>
                    <Th >Total</Th>
                    <Th>Delievry Charges</Th>
                    <Th isNumeric>Sub -Total</Th>
                  </Tr>
                </Thead>
                <Tfoot>
                  <Tr>
                    <Th><Text fontSize="2xl">${total}</Text></Th>
                    <Th><Text fontSize="2xl">${cartItem.length==0 ? 0.00 : 60}</Text></Th>
                    <Th isNumeric><Text fontSize="2xl">${cartItem.length==0 ? 0.00 : total+60}</Text></Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
          {cartItem.map((e) => {
            return (
              <Box key={e.data.id} className={style.box}>
                <Box>
                  <Image src={e.data.img} />
                </Box>
                <Box>
                  <Text fontSize="19px" noOfLines={1}>{e.data.title}</Text>
                  <Box>
                    <Text as="b" marginTop="10px" fontSize="18px">Price :${e.data.rate}</Text>
                  </Box>
                  <Box className={style.on}>
                    <CgRemove fontSize="20px" />
                  </Box>
                  <Box className={style.discount}>
                    <Text as="mark" fontSize="18px">Discount :${e.data.discount}</Text>
                  </Box>
                  <Box marginTop="20px">
                    <ButtonGroup gap={5}>
                      <Button disabled={e.qty === 1} onClick={()=>{handlePatch(e.id , e.qty,-1)}}>-</Button>
                      <Button>{e.qty}</Button>
                      <Button onClick={()=>{handlePatch(e.id , e.qty,1) }}>+</Button>
                    </ButtonGroup>
                  </Box>
                  <Box marginTop="20px" className={style.off}>
                    <Button bg="red" color="white" onClick={()=>{handleDelete(e.id)}}>Remove From Bag</Button>
                  </Box>
                </Box>
              </Box>
              
            )
          })}

        </SimpleGrid>
      </div>
      
      <Footer />
    </div>
  )
}

export default Cart
