import React from 'react'
import { useContext } from 'react'

import { AppContext } from '../context/AuthContextProvider';

import { Navigate, useNavigate } from 'react-router-dom';


import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import { useState } from 'react';


const PrivateRoutes = ({ children }) => {

    const navigate = useNavigate()
    const cancelRef = React.useRef()
    const { isAuth } = useContext(AppContext)
    console.log(isAuth)

    const [state , setState] = useState(true)
    const handleClose=()=>{
        
        setState(false);
        navigate("/")
        
    }
    if (!isAuth) {
        return (
            <>
                <AlertDialog
                    isOpen={state}
                    leastDestructiveRef={cancelRef}
                    onClose={handleClose}
                >
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                Alert
                            </AlertDialogHeader>

                            <AlertDialogBody>
                                You Have To Login First
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={handleClose}>
                                    Cancel
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
            </>
        )

    }
    return children
}

export default PrivateRoutes
