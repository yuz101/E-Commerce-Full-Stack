import { useState } from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./Product.scss"

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)

  const images = [
    "https://img.abercrombie.com/is/image/anf/KIC_139-2679-1062-900_model1?policy=product-large",
    "https://img.abercrombie.com/is/image/anf/KIC_139-2679-1062-900_prod1?policy=product-large",
    "https://img.abercrombie.com/is/image/anf/KIC_139-2679-1062-900_model2?policy=product-large",
    "https://img.abercrombie.com/is/image/anf/KIC_139-2679-1062-900_model3?policy=product-large",
    "https://img.abercrombie.com/is/image/anf/KIC_139-2679-1062-900_model4?policy=product-large",
    "https://img.abercrombie.com/is/image/anf/KIC_139-2679-1062-900_model5?policy=product-large",
  ]

  return (
    <div className='product'>
        <div className='left'>
          <div className='detail'>
            <img src={images[0]} onClick={(e) => setSelectedImg(0)}/>
            <img src={images[1]} onClick={(e) => setSelectedImg(1)}/>
            <img src={images[2]} onClick={(e) => setSelectedImg(2)}/>
            <img src={images[3]} onClick={(e) => setSelectedImg(3)}/>
            <img src={images[4]} onClick={(e) => setSelectedImg(4)}/>
            <img src={images[5]} onClick={(e) => setSelectedImg(5)}/>
          </div>
          <div className='main'>
            <img src={images[selectedImg]}/>
          </div>
        </div>
        <div className='right'>
          <h3>Long-Sleeve Seamless Fabric V-Neck Bodysuit</h3>
          <div className='price'>
            <p>$50</p> 
            <p>$35</p>
          </div>
          <div className='size'>

          </div>
          <div className='add-to-bag'>
            <select>
              <option value="" disabled selected> QTY</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button>Add To Bag</button>
          </div>
          <div className='save-for-later'>
            <FavoriteBorderOutlinedIcon/>
            Save For Later
          </div>
        </div>
    </div>
  )
}

export default Product