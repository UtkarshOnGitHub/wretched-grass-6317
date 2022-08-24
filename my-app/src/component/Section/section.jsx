import { SimpleGrid ,Box, Text, Center, Stack, Button } from '@chakra-ui/react'
import React from 'react'

const Section = () => {
  return (
    <div>
        <SimpleGrid columns={[1,2,2,4]} spacing={10} w="85%" margin="auto" marginTop="30px">
            <Box >
                <img src="https://content.asos-media.com/-/media/homepages/unisex/events-2022/wk52-red-pen/features/ww/ww-cat-tray-deals_under-x.jpg" alt="" />
                <Text fontSize="2xl" marginTop="20px">Biggest Deals</Text>
                <p style={{marginTop:"10px"}}>*Scream In Discount*</p>
            </Box>
            <Box>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/events-2022/wk52-red-pen/features/ww/ww-cat-traydresses--tops-under-x.jpg" alt="" />
                <Text fontSize="2xl" marginTop="20px">Dresses And Top</Text>
                <p style={{marginTop:"10px"}}>For Final Gateways</p>
            </Box>
            <Box>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/events-2022/wk52-red-pen/features/ww/ww-cat-tray_new-season.jpg" alt="" />
                <Text fontSize="2xl" marginTop="20px">Light Weight Layers</Text>
                <p style={{marginTop:"10px"}}>Add To Bag Energy</p>
            </Box>
            <Box >
                <img src="https://images.asos-media.com/products/nike-air-max-270-trainers-in-white-and-hyper-pink/202261009-1-white?$n_480w$&wid=476&fit=constrain" alt="" />
                <Text fontSize="2xl" marginTop="20px">Sports Wear</Text>
                <p  style={{marginTop:"10px"}}>*Sports Mania*</p>
            </Box>
        </SimpleGrid>
        <Center>
            <Text fontSize="4xl" fontWeight="600" marginTop="70px">TRENDING BRANDS</Text>
        </Center>
        <SimpleGrid columns={[1,2,3,6]} spacing={10} w="85%" margin="auto" marginTop="50px">
            <Box>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg" alt="" />
            </Box>
            <Box>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png" alt="" />
            </Box>
            <Box>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png" alt="" />
            </Box>
            <Box>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg" alt="" />
            </Box>
            <Box>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg" alt="" />
            </Box>
            <Box>
                <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg" alt="" />
            </Box>
        </SimpleGrid>
        <Stack/>
        <SimpleGrid columns={[1,1,2]} spacing={20} w="60%" margin="auto" marginTop="50px" >
                <Box>
                    <img src="https://images.asos-media.com/products/asos-design-pleated-shoulder-pencil-dress-in-black/202756061-1-black?$n_480w$&wid=476&fit=constrain" alt="" />
                    <Text  fontSize="4xl" marginTop="20px" fontWeight="500">Big Brand</Text>
                    <Button marginTop="10px" padding="25px" borderRadius="none" border="1px solid black" backgroundColor="white" w="200px">Shop Now</Button>
                </Box>
                <Box>
                        <img src="https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-black-with-photographic-street-back-print/202946982-1-black?$n_480w$&wid=476&fit=constrain" alt="" />
                        <Text  fontSize="4xl" marginTop="20px" fontWeight="500">Going Out</Text>
                        <Button marginTop="10px" padding="25px" borderRadius="none" border="1px solid black" backgroundColor="white" w="200px">Shop Now</Button>
                </Box>
        </SimpleGrid>
    </div>
  )
}

export default Section
