import axios from "axios"


export const getWomenProducts=(params={})=>{
    return axios.get(`http://localhost:5000/women_products`,{
        params:{
            _limit:params.limit,
            _page:params.page
        }
    })
}


export const getListProducts=(params={})=>{
    return axios.get(`http://localhost:5000/products`,{
        params:{
            _limit:params.limit,
            _page:params.page
        }
    })
}