import { useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import "./SpecialProducts.scss"

const SpecialProducts = ({ type }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
      const fetchProducts = async () => {
          try {
              const res = await axios.get("http://localhost:8888/api/v1/products")
              setProducts(res.data)
          } catch (err) {}
      }
      fetchProducts();
    })

    return (
        <div className='special-products'>
            <div className='top'>
                <h1>{type} Products</h1>
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
            </p>
            </div>
            <div className='bottom'>
                {products.slice(0, 4).map((product) => (
                    <Card item={product} key={product.id}/>
                ))}
            </div>
        </div>
    )
}

export default SpecialProducts