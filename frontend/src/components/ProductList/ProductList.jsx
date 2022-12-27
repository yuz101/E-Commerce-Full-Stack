import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import "./ProductList.scss"

const ProductList = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    useEffect(() => {
      const fetchProductData = async () => {
        console.log(cat)
          try {
              const res = await axios.get(cat
            ? `http://localhost:8888/api/v1/products?categories=${cat}`
            : "http://localhost:8888/api/v1/products")
              setProducts(res.data)
          } catch (err) {}
      }
      fetchProductData();
    },[cat])

    useEffect(() => {
        cat && setFilteredProducts(
        products.filter((item) => 
            Object.entries(filters).every(([key, value]) =>
                item.categories.includes(value)
            )
        )
      );
    },[cat, filters, products])

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) => 
                [...prev].sort((a,b) => a.createdAt - b.createdAt)
            )
        }
        if (sort === "price-asc") {
            setFilteredProducts((prev) => 
                [...prev].sort((a,b) => a.price - b.price)
            )
        }

        if (sort === "price-dsc") {
            setFilteredProducts((prev) => 
                [...prev].sort((a,b) => b.price - a.price)
            )
        }
    }, [sort])

    return (
        <div className='product-list'>
            { filteredProducts.map((product) => (
                <Card key={product.id} item={product}/>
            ))}
        </div>
    )
}

export default ProductList