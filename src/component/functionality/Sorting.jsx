import React from 'react';
import styles from "./sorting.module.css"

import {
    Radio,
    RadioGroup,
    Select,
    Stack
} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const Sorting = ({ data, handlepropSort }) => {
    const [searchParams , setSearchParams] = useSearchParams()
    console.log(data)
    const handleSort = (e) => {
        if (e.target.value == "asc") {
            let newData = data.sort((a, b) => {
                return a.rate - b.rate
            })
            console.log(newData)
            handlepropSort(newData)
            setSearchParams({sortBy:"rate-in-desc"})
        } else if (e.target.value == "desc") {
            let newData = data.sort((a, b) => {
                return b.rate - a.rate
            })
            handlepropSort(newData)
            setSearchParams({sortBy:"rate-in-asc"})
        }
        else {
            handlepropSort(data)
        }


    }

    const handleSortName = (e) => {
        if (e.target.value == "asc") {
            let newData = data.sort((a, b) => {
                if (a.title > b.title) return 1;
                else if (a.title < b.title) return -1;
                else return 0
            })
            handlepropSort(newData)
            setSearchParams({sortBy:"title-in-asc"})
        } else if (e.target.value == "desc") {
            let newData = data.sort((a, b) => {
                if (a.title > b.title) return -1;
                else if (a.title < b.title) return 1;
                else return 0
            })
            handlepropSort(newData)
            setSearchParams({sortBy:"title-in-desc"})
        }
    }
    const handleSortRating=(e)=>{
        if (e.target.value == "asc") {
            let newData = data.sort((a, b) => {
                return a.review- b.review
            })
            handlepropSort(newData)
            setSearchParams({sortBy:"review-in-asc"})
        } else if (e.target.value == "desc") {
            let newData = data.sort((a, b) => {
                return b.review- a.review
            })
            handlepropSort(newData)
            setSearchParams({sortBy:"review-in-asc"})
        }
        else {
            handlepropSort(data)
        }
    }

    return (
        <div className={styles.main}>
            <Select onChange={handleSort} placeholder='sort By Price' width="10%" cursor="pointer" padding="7px" backgroundColor="#b1adad" borderRadius="0px" border="none" borderTop="1px solid black" borderBottom="1px solid black" >
                <option value='asc'>Low To High</option>
                <option value='desc'>High To Low</option>
            </Select>
            <Select onChange={handleSortName} placeholder='sort By Name' width="10%" cursor="pointer" padding="7px" backgroundColor="#b1adad" borderRadius="0px" border="none" borderTop="1px solid black" borderBottom="1px solid black" >
                <option value='asc'>A to Z</option>
                <option value='desc'>Z to A</option>
            </Select>
            <Select onChange={handleSortRating} placeholder='sort By Rating' width="10%" cursor="pointer" padding="7px" backgroundColor="#b1adad" borderRadius="0px" border="none" borderTop="1px solid black" borderBottom="1px solid black" >
                <option value='asc'>Low To High</option>
                <option value='desc'>high To Low</option>
            </Select>

        </div>
    )
}

export default Sorting
