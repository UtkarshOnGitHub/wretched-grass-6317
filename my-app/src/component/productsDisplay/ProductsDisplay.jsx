import { Badge, Box, Image, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { BsStar } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'

const ProductsDisplay = ({data}) => {
    console.log(data)
  return (
        <div style={{display:"flex" , justifyContent:"center"}}>
            <SimpleGrid columns={[1,2,3,4]} gap={10}>
                {data.map((e)=>{
                    return(
                        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' key={e.id}>
                        <Image src={e.img}/>
                
                        <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                            New
                            </Badge>
                            <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                            >
                            {e.discount} Discount
                            </Box>
                        </Box>
                        <Box position="relative" top="-517" right="165" >
                                <Text as="em" color="red">{e.discount} Off</Text>
                        </Box>
                        <Box position="relative" top="-106" right="-320px" >
                               <FiHeart fontSize="20px"/>
                        </Box>
                
                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            noOfLines={1}
                            marginRight="19px"
                            marginTop="7px"
                        >
                            <Text>{e.title}</Text>
                        </Box>
                
                        <Box display="flex"  alignItems="center" marginTop="10px">
                            <Text as="del" fontSize="1xl"> € {e.strikedPrice}.00</Text>
                            <Text as="mark" fontSize="2xl" marginLeft="20px"> € {e.rate}0</Text>
                        </Box>
                
                        <Box display='flex' mt='2' alignItems='center'>
                            {Array(5)
                            .fill('')
                            .map((_, i) => (
                                <BsStar
                                key={i}
                                color={i < e.review ? 'red' : 'gray.300'}
                                />
                            ))}
                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                            <Text as="i">{e.review} Star Rating</Text>
                            </Box>
                        </Box>
                        </Box>
                    </Box>
                    
                    )
                })}
            </SimpleGrid>
    </div>
  )
}

export default ProductsDisplay
