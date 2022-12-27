import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./Product.scss"
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { borderColor } from '@mui/system';

const Product = () => {
  
  const loc = useLocation();
  const id = loc.pathname.split('/')[2]
  const [product, setProduct] = useState({})
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedImg, setSelectedImg] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProductData = async () => {
        try {
            const res = await axios.get(`http://localhost:8888/api/v1/products/getOne/${id}`)
            setProduct(res.data)
        } catch (err) {}
    }
    fetchProductData();
  },[id])

  const handleQuantity = (e) => {
    const value = parseInt(e.target.value)
    setSelectedQuantity(value)
  }

  const handleColor = (item, index) => {
    setSelectedColor(item)
  }

  const handleSize = (e) => {
    const value = e.target.textContent
    console.log(value)
    setSelectedSize(value)
  }

  const handleClick = () => {
    dispatch( 
       addProduct({ ...product, selectedQuantity, selectedColor, selectedSize })
    )
  }
  return (
    <div className='product'>
        <div className='left'>
          <div className='detail'>
            {product.img?.map((img, index) => (
               <img key={index} src={img} onClick={(e) => setSelectedImg(index)}/>
            ))}
          </div>
          <div className='main'>
            <img src={product.img ? product.img[selectedImg] : null }/>
          </div>
        </div>
        <div className='right'>
          <h3>{product.title}</h3>
          <div className='price'>
            {product.oldPrice && <p className='old-price'>{product.oldPrice}</p> }
            <p>${product.price}</p>
          </div>
          <div className='colors'>
              <p>Color:</p>
              <div className='items'>
                {product.color?.map((item, index) => (
                    <span key={index} onClick={() => handleColor(item)} style={{backgroundColor: `${item}`, border: selectedColor == item ? '2px solid black': 'none'}}></span>
                ))}
              </div>
          </div>
          <div className='sizes'>
              <p>Size: {}</p>
              <div className='items'>
                {product.size?.map((item, index) => (
                    <span key={index} onClick={handleSize} style={{color: selectedSize == item ? 'white': 'black' ,backgroundColor: selectedSize == item ? '#303030': 'lightgrey'}}>{item}</span>
                ))}
              </div>
          </div>
          <div className='add-to-bag'>
            <select defaultValue={"QTY"} onChange={handleQuantity}>
              <option value="QTY" disabled> QTY</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button onClick={handleClick}>Add To Bag</button>
          </div>
          <div className='save-for-later'>
            <FavoriteBorderOutlinedIcon/>
            Save For Later
          </div>
          <div className='description'>
            <p>Description:</p>
            <p>{product.description}</p>
          </div>
        </div>
    </div>
  )
}

export default Product