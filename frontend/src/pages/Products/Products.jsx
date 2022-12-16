import React from 'react'
import "./Products.scss"
import ProductList from '../../components/ProductList/ProductList'
import { Link } from 'react-router-dom'

const Products = () => {
  const categoryData = [
    {
        id: 1,
        title: "New Arrivals",
    },

    {
        id: 2, 
        title: "Coats & Jackets"
    
    },
    {
        id: 3, 
        title: "Tops"
    
    },
    {
        id: 4, 
        title: "Bottoms"
    
    },
    {
        id: 5, 
        title: "Dresses & Jumpsuits"
    
    },
    {
        id: 6, 
        title: "Active"
    
    },
    {
        id: 7, 
        title: "Matching Sets"
    
    },
    {
        id: 8, 
        title: "Intimates & Sleepwear"
    
    },
    {
        id: 9, 
        title: "Swimwear"
    
    },
    {
        id: 10, 
        title: "Accessories"
    
    },
    {
        id: 11, 
        title: "Shoes"
    
    },
    {
        id: 12, 
        title: "Fragrance & Body Care"
    
    },
    {
        id: 13, 
        title: "Clearance"
    
    },
    ]
  return (
    <div className='products'>
      <div className='left'>
        <div className="filterItem">
          {categoryData.map((category) => (
            <Link 
              className='link' 
              key={category.id} 
              to={`./products/${category.title}`}
            >   
              {category.title}
            </Link>
          ))}
        </div>
      </div>
      <div className='right'>
        <ProductList catgory="Women's"/>
      </div>
    </div>
  )
}

export default Products