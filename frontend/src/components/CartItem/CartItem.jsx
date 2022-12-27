import React from 'react'
import "./CartItem.scss"

const CartItem = ({product}) => {
  return (
    <div className='cart-item'>
      <div className='item-details'>
          <img src={product.img[0]}/>
          <div className='detail'>
            <p>{product.title}</p>
            <p>{product.selectedColor}, {product.selectedSize}</p>
            <p>QTY: {product.selectedQuantity}</p>
          </div>
      </div>
      <div className='price'>
         <p>${product.price * product.selectedQuantity}</p>
      </div>
    </div>
  )
}

export default CartItem