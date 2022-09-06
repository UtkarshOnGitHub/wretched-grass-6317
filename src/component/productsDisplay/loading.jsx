import { Spinner, Text } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
    <div>
        <Spinner
        thickness='5px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        marginTop="30px"
      />
      <Text>Searching For Results....</Text>
    </div>
  )
}

export default Loading
