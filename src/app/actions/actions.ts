import { Food } from "../../../typings";

export const addtocart = (food : Food) =>{
    const cart : Food[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingProductIndex = cart.findIndex(item => item._id === food._id)

    if(existingProductIndex > -1){
        cart[existingProductIndex].quantity += 1
    }

    else {
        cart.push({
            ...food, quantity: 1
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))

}

export const removeFromCart =(foodId : string) =>{
    let cart : Food[] = JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== foodId)

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const updateCartquantity =(foodId : string, quantity: number) =>{
    const cart :Food[]= JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex =cart.findIndex(item => item._id === foodId)

    if(productIndex > -1){
        cart[productIndex].quantity = quantity
        localStorage.setItem('cart',JSON.stringify(cart))
    }
}

export const getCartItems = () : Food[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')

}

