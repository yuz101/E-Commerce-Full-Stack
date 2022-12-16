import React from 'react'
import Card from '../Card/Card'
import "./ProductList.scss"

const ProductList = ({catgory}) => {
    const productData = [
    {
        id: 1,
        img: "https://img.abercrombie.com/is/image/anf/KIC_155-3081-3098-275_model1?policy=product-large",
        img2: "https://img.abercrombie.com/is/image/anf/KIC_155-3081-3098-275_model2?policy=product-large",
        title: 'High Rise Vintage Flare Jean',
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 2,
        img: "https://img.abercrombie.com/is/image/anf/KIC_139-2679-1062-900_model1?policy=product-large",
        img2: "https://img.abercrombie.com/is/image/anf/KIC_139-2679-1062-900_model2?policy=product-large",
        title: 'Long-Sleeve Seamless Fabric V-Neck Bodysuit',
        isNew: false,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 3,
        img: "https://img.abercrombie.com/is/image/anf/KIC_159-2869-4315-220_model1?policy=product-large",
        img2: "https://img.abercrombie.com/is/image/anf/KIC_159-2869-4315-220_model2?policy=product-large",
        title: 'Long-Sleeve Seamless Fabric V-Neck Bodysuit',
        isNew: false,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 4,
        img: "https://img.abercrombie.com/is/image/anf/KIC_152-2484-1444-178_model1?policy=product-large",
        img2: "https://img.abercrombie.com/is/image/anf/KIC_152-2484-1444-178_model2?policy=product-large",
        title: 'Oversized Boyfriend Sunday Crew',
        isNew: false,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 5,
        img: "https://img.abercrombie.com/is/image/anf/KIC_152-2484-1444-178_model1?policy=product-large",
        img2: "https://img.abercrombie.com/is/image/anf/KIC_152-2484-1444-178_model2?policy=product-large",
        title: 'Oversized Boyfriend Sunday Crew',
        isNew: false,
        oldPrice: 19,
        price: 12,
    },
    ]
    return (
        <div className='product-list'>
            <div className='top'>
                <h2>{catgory}</h2>
                <select>
                    <option value="" disabled selected>Sort By</option>
                    <option>Featured</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>
            <div className='bottom'>
                {productData.map((product) => (
                    <Card item={product} key={product.id}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList