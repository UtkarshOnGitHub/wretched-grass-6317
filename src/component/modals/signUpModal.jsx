import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    InputRightElement,
    InputGroup,
    useToast,
} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useState } from 'react'
import { Createuser } from '../../api/api'
import { AppContext } from '../../context/AuthContextProvider'





export function InitialFocus({ openNow, setClose }) {
    const { setIsAuth , setProfileName} = useContext(AppContext)
    const initialRef = React.useRef(null)
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const onClose = () => {
        setClose(false)
    }

    const initail = {
        name:"",
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(initail)
    const [name, setName] = useState("")
    const toast = useToast()


    const handleChange = (e) => {
        const { name, value, type } = e.target
        const val = type == "number" ? Number(value) : value;
        setFormData({ ...formData, [name]: val })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        Createuser(formData).then((res) => {
            console.log(res.data)
            if(res.data=="Invalid Credential"){
                toast({
                    title: 'Invalid Credential.',
                    description: `PLease Provide Valid Information`,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })  
            }else{
                toast({
                    title: 'LogIn SuccessFull.',
                    description: `${name} Welcome Back!`,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
                localStorage.setItem("asos-token",res.data.token)
                setIsAuth(true)
                setClose(false)
                setProfileName(formData.name)
            }
        }).catch((err) => {
            console.log(err)
        })
    }




return (
    <>
        <Modal
            initialFocusRef={initialRef}
            // finalFocusRef={finalRef}
            isOpen={openNow}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>LogIn</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input autoFocus placeholder='First name' type={"text"} name="name" value={formData.name} onChange={handleChange} />
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
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                        Log In
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
)
}