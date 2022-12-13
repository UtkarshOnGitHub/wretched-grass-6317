import axios from "axios"


export const getWomenProducts=(params={})=>{
    return axios.get(`https://server-production-dfc6.up.railway.app/women_products`,{
        params:{
            _limit:params.limit,
            _page:params.page
        }
    })
}

export const getProductsWithID=(name,id)=>{
    return axios.get(`https://server-production-dfc6.up.railway.app/${name}/${id}`)
}

export const getMenProducts=(params={})=>{
    return axios.get(`https://server-production-dfc6.up.railway.app/men_products`,{
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


export const getCart =()=>{
    return axios.get(`https://server-production-dfc6.up.railway.app/cart`)
}

export const addToCart =(data)=>{
    return axios.post(`https://server-production-dfc6.up.railway.app/cart` ,{
        data:data,
        qty:1
    })
}
export const delFromCart =(id)=>{
    return axios.delete(`https://server-production-dfc6.up.railway.app/cart/${id}`)

}

export const countCart =(id,qty,value)=>{
    return axios.patch(`https://server-production-dfc6.up.railway.app/cart/${id}`,{
        qty:qty+value
    })

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
    return axios.post(`https://reqres.in/api/login`,{
        email:data.email,
        password:data.password
    })
}
