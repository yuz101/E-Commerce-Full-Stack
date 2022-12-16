import React from 'react'
import CartItem from '../CartItem/CartItem'
import "./Cart.scss"

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://img.abercrombie.com/is/image/anf/KIC_155-3081-3098-275_model1?policy=product-large",
            img2: "https://img.abercrombie.com/is/image/anf/KIC_155-3081-3098-275_model2?policy=product-large",
            title: 'High Rise Vintage Flare Jean',
            quantity: 1,
            price: 12,
        },
        {
            id: 2,
            img: "https://img.abercrombie.com/is/image/anf/KIC_139-2679-1062-900_model1?policy=product-large",
            img2: "https://img.abercrombie.com/is/image/anf/KIC_139-2679-1062-900_model2?policy=product-large",
            title: 'Long-Sleeve Seamless Fabric V-Neck Bodysuit',
            quantity: 3,
            price: 17,
        },
    ]
    return (
        <div className='cart'>
            <h3>Shopping Cart</h3>
            <div className='cart-items'>
                {data.map((item) => (
                    <CartItem product={item}/>
                ))}
            </div>
            <div className='subtotal'>
                <h4>Subtotal</h4>
                <h4>$199</h4>
            </div>
            <button>Check Out</button>
        </div>
    )
}

export default Cart