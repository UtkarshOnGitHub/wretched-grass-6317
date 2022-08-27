import axios from "axios"


export const getWomenProducts=(params={})=>{
    return axios.get(`http://localhost:5000/women_products`,{
        params:{
            _limit:params.limit,
            _page:params.page
        }
    })
}

export const getProductsWithID=(name,id)=>{
    return axios.get(`http://localhost:5000/${name}/${id}`)
}

export const getMenProducts=(params={})=>{
    return axios.get(`http://localhost:5000/men_products`,{
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


export const getCart =()=>{
    return axios.get(`http://localhost:5000/cart`)
}

export const addToCart =(data)=>{
    return axios.post(`http://localhost:5000/cart` ,{
        data:data,
        qty:1
    })
}
export const delFromCart =(id)=>{
    return axios.delete(`http://localhost:5000/cart/${id}`)

}

export const countCart =(id,qty,value)=>{
    return axios.patch(`http://localhost:5000/cart/${id}`,{
        qty:qty+value

    })

}
export const getWishList =()=>{
    return axios.get(`http://localhost:5000/wishlist`)
}

export const addToWishList =(data)=>{
    return axios.post(`http://localhost:5000/wishlist` ,{
        data:data,
    })
}
export const delWishList =(id)=>{
    return axios.delete(`http://localhost:5000/wishlist/${id}`)
}