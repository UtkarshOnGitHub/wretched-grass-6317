import { Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({page , handleSetPage}) => {

    const handlePageChange=(value)=>{
        handleSetPage(page+value)
    }
  return (
    <div>
        <ButtonGroup gap="10px" marginTop="20px">
            <Button disabled={page==1} onClick={()=>{handlePageChange(-1)}}>Prev</Button>
            <Button>{page}</Button>
            <Button disabled={page==3} onClick={()=>{handlePageChange(1)}}>Next</Button>
        </ButtonGroup>
    </div>
  )
}

export default Pagination
