import {useState} from 'react'
import "./Products.scss"
import ProductList from '../../components/ProductList/ProductList'
import { useLocation, Link} from 'react-router-dom'

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
  
  const loc = useLocation();
  const cat = loc.pathname.split('/')[2]
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  
  const handleFilter = (e) => {
    const value = e.target.textContent
    setFilters({
      [e.target.textContent]: value.toLowerCase()
    })
  }

  const handleSort = (e) => {
    setSort(e.target.value)
  }

  return (
    <div className='products'>
      <div className='left'>
        <div className="filterItem">
          {categoryData.map((category) => (
            <span key={category.id} onClick={handleFilter}>{category.title}</span>
          ))}
        </div>
      </div>
      <div className='right'>
          <div className='top'>
              <h2> {cat} </h2>
              <select onChange={(handleSort)}>
                  <option value="" disabled>Sort By</option>
                  <option value="feature">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-dsc">Price: High to Low</option>
              </select>
          </div>
            <ProductList cat={cat} filters={filters} sort={sort}/>
      </div>
    </div>
  )
}

export default Products