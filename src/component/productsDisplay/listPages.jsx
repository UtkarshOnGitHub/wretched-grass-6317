import { Badge, Box, Button, Image, Img, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getListProducts } from '../../api/api';
import Dropdown from '../droDownNav/Dropdown';
import Footer from '../footer/footer';
import MiddleComp from '../middleSection/MiddleComp';
import Navbar from '../navbar/Navbar';
import Pagination from './pagination';


const ListPages = () => {

    const [listProd, setListProd] = useState([])
    const [page , setPage] = useState(1)

    useEffect(() => {
        getListProducts({
            page:page,
            limit:16
        }).then((res) => {
            setListProd(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [page])

    const handleSetPage=(value)=>{
        setPage(value)
    }


    return (
        <>
            <Navbar />
            <Box w="70%" h="70%" margin="auto">
            <Img src="https://asos-12954-s3.s3.eu-west-2.amazonaws.com/files/1816/3785/6657/Our_Brands.png" w="100%"/>
            </Box>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <SimpleGrid columns={[1, 2, 3, 4]} gap={10}>
                    {listProd?.map((e) => {
                        console.log(e.imageUrl)
                        return (
                            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' key={e.id}>
                                <Image src={e.imageUrl} w="100%" h="80%" />
                                <Box p='6'>
                                    <Box display='flex' alignItems='baseline'>
                                        <Box
                                            color='gray.500'
                                            fontWeight='semibold'
                                            letterSpacing='wide'
                                            fontSize='xs'
                                            textTransform='uppercase'
                                            ml='2'
                                        >
                                            <Text as="mark"> {e.brandName}</Text>
                                        </Box>
                                    </Box>

                                    <Box
                                        mt='1'
                                        fontWeight='semibold'
                                        as='h4'
                                        lineHeight='tight'
                                        noOfLines={1}
                                        marginTop="10px"
                                        marginLeft="-10px"
                                    >
                                        {e.name}
                                    </Box>

                                    <Box gap={10} display="flex">
                                        <Text as="del">${e.price.current.value}</Text>
                                        <Text as="em">New Price:{e.price.current.text}</Text>
                                    </Box>
                                    <Box gap={10} display="flex">
                                        <Text as="em">Color: {e.colour}</Text>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })}
                </SimpleGrid>
            </div>
            <Pagination page={page} handleSetPage={handleSetPage}/>
            <Footer/>
        </>
    )
}

export default ListPages
