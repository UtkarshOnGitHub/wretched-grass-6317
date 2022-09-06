import axios from "axios"


export const getWomenProducts=(params={})=>{
    return axios.get(`https://secure-atoll-55277.herokuapp.com/women_products`,{
        params:{
            _limit:params.limit,
            _page:params.page
        }
    })
}

export const getProductsWithID=(name,id)=>{
    return axios.get(`https://secure-atoll-55277.herokuapp.com/${name}/${id}`)
}

export const getMenProducts=(params={})=>{
    return axios.get(`https://secure-atoll-55277.herokuapp.com/men_products`,{
        params:{
            _limit:params.limit,
            _page:params.page,
        }
    })
}



export const getListProducts=(params={})=>{
    return axios.get(`https://secure-atoll-55277.herokuapp.com/products`,{
        params:{
            _limit:params.limit,
            _page:params.page
        }
    })
}


export const getCart =()=>{
    return axios.get(`https://secure-atoll-55277.herokuapp.com/cart`)
}

export const addToCart =(data)=>{
    return axios.post(`https://secure-atoll-55277.herokuapp.com/cart` ,{
        data:data,
        qty:1
    })
}
export const delFromCart =(id)=>{
    return axios.delete(`https://secure-atoll-55277.herokuapp.com/cart/${id}`)

}

export const countCart =(id,qty,value)=>{
    return axios.patch(`https://secure-atoll-55277.herokuapp.com/cart/${id}`,{
        qty:qty+value
    })

}
export const getWishList =()=>{
    return axios.get(`https://secure-atoll-55277.herokuapp.com/wishlist`)
}

export const addToWishList =(data)=>{
    return axios.post(`https://secure-atoll-55277.herokuapp.com/wishlist` ,{
        data:data,
    })
}
export const delWishList =(id)=>{
    return axios.delete(`https://secure-atoll-55277.herokuapp.com/wishlist/${id}`)
}


export const Createuser =(data={})=>{
    return axios.post(`https://reqres.in/api/login`,{
        email:data.email,
        password:data.password
    })
}