
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    FormControl,
    FormLabel,
    InputGroup,
    useToast,
    InputRightElement,
  } from '@chakra-ui/react'

import React, { useContext, useState } from 'react'
import { Createuser } from '../../api/api'
import { AppContext } from '../../context/AuthContextProvider'




export function DrawerExample({login , setLogin}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const handleClose=()=>{
        setLogin(false)
    }
    const { setIsAuth} = useContext(AppContext)
    const initialRef = React.useRef(null)
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)


    const initail = {
        "email": "",
        "password": ""
    }
    const [formData, setFormData] = useState(initail)
    const [name, setName] = useState("")
    const toast = useToast()


    const handleChange = (e) => {
        const { name, value, type } = e.target
        const val = type == "number" ? Number(value) : value;
        setFormData({ ...formData, [name]: val })
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        Createuser(formData).then((res) => {
            console.log(res)
            toast({
                title: 'LogIn SuccessFull.',
                description: `${name} Welcome Back!`,
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            setIsAuth(true)
            // setClose(false)
        }).catch((err) => {
            console.log(err)
        })
    }





  
    return (
      <>
        <Drawer
          isOpen={login}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton onClick={handleClose} />
            <DrawerHeader>Log In To Your Account</DrawerHeader>
  
            <DrawerBody>
            <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input autoFocus placeholder='First name' name="name" value={name} onChange={handleNameChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Enter Your Email' type="email" name="email" value={formData.email} onChange={handleChange} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password' name="password" onChange={handleChange} value={formData.password}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={handleClose}>
                Cancel
              </Button>
              <Button colorScheme='blue' onClick={handleSubmit}>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }