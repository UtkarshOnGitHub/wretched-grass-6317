import axios from "axios"


export const getWomenProducts=(params={})=>{
    return axios.get(`https://nice-tick-yoke.cyclic.app/products?name=women_products`,{
        params:{
            _limit:params.limit,
            _page:params.page
        }
    })
}

export const getProductsWithID=(id)=>{
    return axios.get(`https://nice-tick-yoke.cyclic.app/products/singleData?id=${id}`)
}

export const getMenProducts=(params={})=>{
    return axios.get(`https://nice-tick-yoke.cyclic.app/products?name=men_products`,{
        params:{
            _limit:params.limit,
            _page:params.page,
        }
    })
}



export const getListProducts=(params={})=>{
    return axios.get(`https://server-production-dfc6.up.railway.app/products`,{
        params:{
            _limit:params.limit,
            _page:params.page
        }
    })
}


export const getCart =(id)=>{
    return axios.get(`https://nice-tick-yoke.cyclic.app/cart`,{
        headers:{
            id:id
        }
    })
}

export const addToCart =(productId,userId)=>{
    return axios.post(`https://nice-tick-yoke.cyclic.app/cart` ,{
        productId:productId,
        userId:userId
    })
}
export const delFromCart =(id)=>{
    return axios.delete(`https://nice-tick-yoke.cyclic.app/cart/${id}`)

}

export const countCart =(data={})=>{
    return axios.post(`https://nice-tick-yoke.cyclic.app/cart/qty`,data)

}
export const getWishList =()=>{
    return axios.get(`https://server-production-dfc6.up.railway.app/wishlist`)
}

export const addToWishList =(data)=>{
    return axios.post(`https://server-production-dfc6.up.railway.app/wishlist` ,{
        data:data,
    })
}
export const delWishList =(id)=>{
    return axios.delete(`https://server-production-dfc6.up.railway.app/wishlist/${id}`)
}


export const Createuser =(data={})=>{
    return axios.post(`https://nice-tick-yoke.cyclic.app/user/login`,data)
}
export const Signuser =(data={})=>{
    return axios.post(`https://nice-tick-yoke.cyclic.app/user/signup`,data)
}

export const getuser =(token)=>{
    // console.log(token)
    return axios.post(`https://nice-tick-yoke.cyclic.app/user/getuser`, {token:token})
}


