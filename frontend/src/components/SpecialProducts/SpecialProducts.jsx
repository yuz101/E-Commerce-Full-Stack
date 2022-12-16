import React from 'react'
import Card from '../Card/Card'
import "./SpecialProducts.scss"

const SpecialProducts = ({ type }) => {
    const data = [
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
    ]
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
                {data.map((product) => (
                    <Card item={product} key={product.id}/>
                ))}
            </div>
        </div>
    )
}

export default SpecialProducts