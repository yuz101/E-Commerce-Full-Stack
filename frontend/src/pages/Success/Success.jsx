import axios from 'axios'
import React, { useEffect } from 'react'

const Success = () => {
    useEffect(() => {
        const createOrder = () => {
            try{
                const order = axios.post("localhost:3000/api/v1/product/create", {
                    
                })
            } catch (err) {

            }
        }
    })
    
  return (
    <div>Success</div>
  )
}

export default Success