import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    useToast,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Signuser } from '../../api/api';
  
  const avatars = [
    {
      name: 'Ryan Florence',
      url: 'https://bit.ly/ryan-florence',
    },
    {
      name: 'Segun Adebayo',
      url: 'https://bit.ly/sage-adebayo',
    },
    {
      name: 'Kent Dodds',
      url: 'https://bit.ly/kent-c-dodds',
    },
    {
      name: 'Prosper Otemuyiwa',
      url: 'https://bit.ly/prosper-baba',
    },
    {
      name: 'Christian Nwamba',
      url: 'https://bit.ly/code-beast',
    },
  ];
  
  export default function SignUpAcc() {

    const [name ,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const toast = useToast()
    const init ={
        name:name,
        email:email,
        password:password
    }
    const redirect = useNavigate()
    const handleSubmit = ()=>{
        Signuser(init).then((res)=>{
            console.log(res.data)
            if(res.data=="User Created Successfully"){
                toast({
                    title: `Accound Created For You`,
                    description: `We Have Created A Account For You`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                  })
                  redirect("/")
            }else if(res.data=="Cannot Create two User With same Email"){
                toast({
                    title: `Account Not Created`,
                    description: `Cannot Create Account With Two Same Email`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                  })
            }else{
                toast({
                    title: `Account Not Created`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                  })   
            }
        })
    }
    console.log(init)
    return (
        <>
      <Box position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}>
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
              ASOS{' '}
              <br/>
              Fashion As Unique As You Are
            </Heading>
            <Stack direction={'row'} spacing={4} align={'center'}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    // size={useBreakpointValue({ base: 'md', md: 'lg' })}
                    position={'relative'}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: 'full',
                      height: 'full',
                      rounded: 'full',
                      transform: 'scale(1.125)',
                      bgGradient: 'linear(to-bl, red.400,pink.400)',
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                +
              </Text>
              <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={'gray.800'}
                color={'white'}
                rounded={'full'}
                minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                position={'relative'}
                _before={{
                  content: '""',
                  width: 'full',
                  height: 'full',
                  rounded: 'full',
                  transform: 'scale(1.125)',
                  bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                  position: 'absolute',
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}>
                YOU
              </Flex>
            </Stack>
          </Stack>
          <Stack
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Join Asos Club
                <Text
                  as={'span'}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text">
                  !
                </Text>
              </Heading>
              <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                Fashion As Unique As You Are. Around 35000+ Satisfy 
                Customers
              </Text>
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={4}>
                <Input
                  placeholder="Firstname"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  onChange={(e)=>{setName(e.target.value)}}
                />
                <Input
                  placeholder="+1 (___) __-___-___"
                  type="text"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  
                />
                <Input
                  placeholder="firstname@lastname.io"
                  type = "email"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  onChange={(e)=>{setEmail(e.target.value)}}
                />

                <Input
                  placeholder="password"
                  type="password"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                    
                  }}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </Stack>
              <Button
                onClick={handleSubmit}
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, red.400,pink.400)',
                  boxShadow: 'xl',
                }} >
                SignUp
              </Button>
              <Link to="/"><Text marginTop={"30px"} color="blue">Go Back Home Page</Text></Link>
            </Box>
            form
          </Stack>
        </Container>
      </Box>
      </>
    );
  }
  