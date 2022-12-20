import express from 'express'
import Cart from '../models/Cart.js'
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from './verifyToken.js'

const router = express.Router()

//CREATE
router.post('/create', verifyTokenAndAuthorization, async (request, response) => {
    const cart = Cart(request.body)
    try {
      const newCart = await cart.save()
      response.status(201).json(newCart)
    } catch (err) {
      response.status(500).json(err)
    }
  }
)

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, async (request, response) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      request.params.id,
      {
        $set: request.body,
      },
      { new: true }
    )

    response.status(200).json(updatedCart)
  } catch (err) {
    response.status(500).json(err)
  }
})

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, async (request, response) => {
  try {
    await Cart.findByIdAndDelete(request.params.id)
    response.status(200).json('Cart deleted')
  } catch (err) {
    response.status(500).json(err)
  }
})

//GET USER CART
router.get('/:userId', verifyTokenAndAuthorization, async (request, response) => {
  try {
    const cart = await Cart.findOne({
        userId: request.params.userId
    })
    response.status(200).json(cart)
  } catch (err) {
    response.status(500).json(err)
  }
})

//GET All CARTS
router.get('/', verifyTokenAndAdmin, async (request, response) => {
  try {
    const carts = await Cart.find()
    response.status(200).json(carts)
  } catch (err) {
    response.status(500).json(err)
  }
})

export default router
