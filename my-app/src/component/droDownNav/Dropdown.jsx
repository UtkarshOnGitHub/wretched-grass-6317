import { Text, Flex , Box, Container , Center, Img, Spacer, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import dropdownStyle from "./dropdownStyle.module.css";

const saledata =[
    {
        title:" Shoes"
    },
    {
        title:" Dresses"
    },
    {
        title:" Top"
    },
    {
        title:" Swimmer"
    },
    {
        title:" Active Wear"
    },
    {
        title:" Face+Beauty"
    },
    {
        title:" New Line"
    },
    {
        title:" Bag And Purses"
    },
    {
        title:" Sportswear"
    },

]




const Dropdown = () => {







  return (
    <div>
    <div style={{ width:"100%",margin:"auto", display:"flex" , justifyContent:"center", alignItems:"center",backgroundColor:"#525050" ,  }}>
      <Flex className={dropdownStyle.box} alignItems="center" color="white">
        <Box className={dropdownStyle.hov}>
                <span className={dropdownStyle.span}>
                    <span>Sale</span>
                </span>
            <Container >
                <Box className={dropdownStyle.boxDiv}>
                    <Flex>
                        <ul>
                            <Text fontSize="2xl">Shop By Products</Text>
                            {saledata.map((e)=>{
                                return(
                                    <li>Sale {e.title}</li>
                                )
                            })}
                        </ul>
                        <Spacer/>
                        <ul>
                            {saledata.map((e)=>{
                                return(
                                    
                                    <Link to="/category"><li><Button h="28px">Shop</Button></li></Link>
                                )
                            })}
                        </ul>
                            <Spacer/>
                            <Box className={dropdownStyle.off}  w="300px">
                                <Img  src="https://content.asos-media.com/-/media/homepages/unisex/events-2022/wk52-red-pen/features/ww/ww-cat-tray-deals_under-x.jpg" alt="" />
                            </Box>
                            <Spacer/>
                            <Box className={dropdownStyle.off} w="300px">
                                <Img src="https://images.asos-media.com/products/claudia-canova-unlined-two-pocket-tote-bag-with-removable-pouch-in-black/20814218-1-black?$n_480w$&wid=476&fit=constrain" alt="" />
                            </Box>
                    </Flex>
                </Box>
            </Container>
        </Box>

        <Box className={dropdownStyle.hov}>
            <Text fontSize="18px">New In</Text>
            <Container >
                <Box className={dropdownStyle.boxDiv}>
                    <Flex>
                        <ul>
                            <Text fontSize="2xl">New Products</Text>
                            {saledata.map((e)=>{
                                return(
                                    <li>New {e.title}</li>
                                )
                            })}
                        </ul>
                        <Spacer/>
                        <ul>
                            {saledata.map((e)=>{
                                return(
                                    
                                    <Link to="/category"><li><Button h="28px">Shop</Button></li></Link>
                                )
                            })}
                        </ul>
                            <Spacer/>
                            <Box className={dropdownStyle.off}  w="300px">
                                <Img  src="https://images.asos-media.com/products/adidas-originals-astir-trainers-in-cloud-white-and-cream/202532087-1-cloudwhite?$n_480w$&wid=476&fit=constrain" alt="" />
                            </Box>
                            <Spacer/>
                            <Box className={dropdownStyle.off}  w="300px">
                                <Img  src="https://images.asos-media.com/products/asos-design-volume-sleeve-oversized-shirt-in-abstract-squiggle-print/202983127-1-abstractprint?$n_480w$&wid=476&fit=constrain" alt="" />
                            </Box>
                    </Flex>
                </Box>
            </Container>
        </Box>
        <Box className={dropdownStyle.hov}>
            <Text fontSize="18px">Clothing</Text>
            <Container className={dropdownStyle.list} w="200px" >
                <Box>
                    <ul>
                        <Text fontSize="3xl">In Clothing</Text>
                        {saledata.map((e)=>{
                            return(
                                <Link to="/category"> <li>{e.title}</li></Link>
                            )
                        })}
                    </ul>
                </Box>
            </Container>
        </Box>
        <Box className={dropdownStyle.hov}>
            <Text fontSize="18px">Dresses</Text>
            <Container className={dropdownStyle.list} w="200px" >
                <Box>
                    <ul>
                        <Text fontSize="3xl">In Dresses</Text>
                        {saledata.map((e)=>{
                            return(
                                <Link to="/category"> <li>{e.title}</li></Link>
                            )
                        })}
                    </ul>
                </Box>
            </Container>

        </Box>
        <Box className={dropdownStyle.hov}>
            <Text fontSize="18px">Shoes</Text>
            <Container className={dropdownStyle.list} w="200px" >
                <Box>
                    <ul>
                        <Text fontSize="3xl">In Shoes</Text>
                        {saledata.map((e)=>{
                            return(
                                <Link to="/category"> <li>{e.title}</li></Link>
                            )
                        })}
                    </ul>
                </Box>
            </Container>
            </Box>
        <Box>
                <span className={dropdownStyle.span}>
                    <span>Top Shop</span>
                </span>
                <Container className={dropdownStyle.list} w="200px" >
                <Box>
                    <ul>
                        <Text fontSize="3xl">In Top</Text>
                        {saledata.map((e)=>{
                            return(
                                <li>{e.title}</li>
                            )
                        })}
                    </ul>
                </Box>
            </Container>
        </Box>
        <Box className={dropdownStyle.hov}>
            <Text fontSize="18px">Accessiories</Text>
            <Container className={dropdownStyle.list} w="200px" >
                <Box>
                    <ul>
                        <Text fontSize="3xl">Accessiories</Text>
                        {saledata.map((e)=>{
                            return(
                                <Link to="/category"><li>Access {e.title}</li></Link>
                            )
                        })}
                    </ul>
                </Box>
            </Container>
            </Box>
        <Box className={dropdownStyle.hov}>
            <Text fontSize="18px">Summer</Text>
            <Container className={dropdownStyle.list} w="200px" >
                <Box>
                    <ul>
                        <Text fontSize="3xl">In Summer</Text>
                        {saledata.map((e)=>{
                            return(
                                <Link to="/category"><li>Summer {e.title}</li></Link>
                            )
                        })}
                    </ul>
                </Box>
            </Container>
            </Box>
        <Box className={dropdownStyle.hov}>
            <Text fontSize="18px">Trending Now</Text>
            <Container className={dropdownStyle.list} w="200px" >
                <Box>
                    <ul>
                        <Text fontSize="3xl">In Trending</Text>
                        {saledata.map((e)=>{
                            return(
                                <Link to="/category"><li>Trending {e.title}</li></Link>
                            )
                        })}
                    </ul>
                </Box>
            </Container>
            </Box>
        <Box className={dropdownStyle.hov}>
            <Text fontSize="18px">SportsWear</Text>
            <Container className={dropdownStyle.list} w="200px" >
                <Box>
                    <ul>
                        <Text fontSize="3xl">SportsWear</Text>
                        {saledata.map((e)=>{
                            return(
                                <Link to="/category"> <li>Sports {e.title}</li></Link>
                            )
                        })}
                    </ul>
                </Box>
            </Container>
            </Box>
        <Box className={dropdownStyle.hov}>
            <Text fontSize="18px">Face+body</Text>
            <Container className={dropdownStyle.list} w="200px" >
                <Box>
                    <ul>
                        <Text fontSize="3xl">Face Body</Text>
                        {saledata.map((e)=>{
                            return(
                                <Link to="/category">   <li>Cos {e.title}</li></Link>
                            )
                        })}
                    </ul>
                </Box>
            </Container>
            </Box>
        <Box className={dropdownStyle.hov}>
        <span className={dropdownStyle.span}>
                    <span>Outlet</span>
                </span>
                <Container className={dropdownStyle.list} w="200px" >
                <Box>
                    <ul>
                        <Text fontSize="3xl">Outlet</Text>
                        {saledata.map((e)=>{
                            return(
                                <Link to="/category"> <li>Outlet {e.title}</li></Link>
                            )
                        })}
                    </ul>
                </Box>
            </Container>
            </Box>
        <Box className={dropdownStyle.hov}>
            <Text fontSize="18px">MarketPlace</Text>
            <Container className={dropdownStyle.list} w="200px" >
                <Box>
                    <ul>
                        <Text fontSize="3xl">Market</Text>
                        {saledata.map((e)=>{
                            return(
                                <Link to="/category">  <li>Market {e.title}</li></Link>
                            )
                        })}
                    </ul>
                </Box>
            </Container>
            </Box>
        
      </Flex>
    </div>

    </div>
  )
}

export default Dropdown
