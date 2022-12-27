import React from 'react'
import axios from 'axios'
import CartItem from '../CartItem/CartItem'
import "./Cart.scss"
import { useSelector } from 'react-redux'

const Cart = () => {

    const cart = useSelector(state => state.cart)

    const handleCheckout = async () => {
        try {
            const res = await axios.post('http://localhost:8888/api/v1/payment/checkout', {
                cartItems: cart.products
            })
            window.location.href = res.data.url
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='cart'>
            <h3>Shopping Cart</h3>
            <div className='cart-items'>
                {cart.products.map((item) => (
                    <CartItem key={item.id} product={item} />
                ))}
            </div>
            <div className='subtotal'>
                <h4>Subtotal</h4>
                <h4>{cart.totalPrice}</h4>
            </div>
            <button onClick= { handleCheckout }>
                Proceed To Check Out
            </button>
        </div>
    )
}

export default Cart