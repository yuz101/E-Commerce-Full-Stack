import React from 'react'
import "./CartItem.scss"

const CartItem = ({product}) => {
  return (
    <div className='item'>
      <img src={product.img}/>
      <div className='item-details'>
        <div className='description'>
          <p>{product.title}</p>
          <p>QTY: {product.quantity}</p>
        </div>
        <p>${product.price * product.quantity}</p>
      </div>
    </div>
  )
}

export default CartItem