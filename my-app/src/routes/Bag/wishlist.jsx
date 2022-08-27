import { Box, Button, ButtonGroup, Image, SimpleGrid, Toast, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { addToCart, delWishList, getWishList } from '../../api/api'
import Dropdown from '../../component/droDownNav/Dropdown'
import Footer from '../../component/footer/footer'
import Navbar from '../../component/navbar/Navbar'

const Wishlist = () => {
    const toast = useToast()
    const [list, setList] = useState([])

    const getData = () => {
        getWishList().then((res) => {
            console.log(res)
            setList([...res.data])
        })
    }
    useEffect(() => {
        getData()
    }, [])

    const handleDelete=(id)=>{
        delWishList(id).then((res)=>{
            console.log(res)
            toast({
                title: `Item Deleted`,
                status:"error",
                position:"bottom",
                isClosable: true,
              })
            getData()
        })
    }
    const handleCart=(e)=>{
        addToCart(e.data).then((res)=>{
          console.log(res);
          console.log(e.data)
          toast({
            title: `Item Added To Cart`,
            position: `top-right`,
            isClosable: true,
            duration: 3000
          })
        }).catch((err)=>{
          console.log(err)
        })
    
      }
console.log("list",list)
if(list.length==0){
    return(
    <div>
        <Navbar/>
        <Dropdown/>
        <Box display="flex" justifyContent="center">
        <Image src="https://aquamarineexotic.com/adminpanel/assets/images/empty-wishlist.png"/>
        </Box>
        <Footer/>
    </div>
    )
}
    return (
        <div>
            <Navbar/>
            <Dropdown/>
            <SimpleGrid columns={[1,2,3,4]}>
                {list.map((e) => {
                    return (
                        <Box key={e.id}>
                            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <Image src={e.data.img} />

                                <Box p='6'>
                                    <Box display='flex' alignItems='baseline'>
                                    </Box>

                                    <Box
                                        mt='1'
                                        fontWeight='semibold'
                                        as='h4'
                                        lineHeight='tight'
                                        noOfLines={1}
                                    >
                                        {e.data.title}
                                    </Box>

                                    <Box>
                                        {e.data.rate}
                                    </Box>
                                        <Button onClick={()=>{handleCart(e)}}>Add To Bag</Button><br/>
                                        <Button marginTop="10px" onClick={()=>{handleDelete(e.id)}}>Remove From WishList</Button>
      
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </SimpleGrid>
            <Footer/>
        </div>
    )
}

export default Wishlist
