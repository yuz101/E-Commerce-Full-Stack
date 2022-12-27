import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'
import "./Card.scss"

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item._id}`}>
        <div className='card'>
            <div className='images'>
                {item.isNew && <span>New Season</span>}
                <img className='mainImg' src={item.img}/>
                <img className='secondImg' src={item.img2}/>
            </div>
            <p className='title'>{item.title}</p>
            <div className='prices'>
                {item.oldPrice && <p className='old-price'>${item.oldPrice}</p> }
                <p>${item.price}</p>
            </div>
        </div>
    </Link>
  )
}

export default Card