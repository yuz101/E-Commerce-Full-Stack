import express, { request, response } from 'express'
import Order from '../models/Order.js'
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from './verifyToken.js'

const router = express.Router()

// ORDER STATS

router.get('/stats', verifyTokenAndAdmin, async (request, response) => {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

    try {
        const data = await Order.aggregate([
            { $match: { createdAt: { $gte: lastYear} }},
            { $project: { month: { $month: "$createdAt"}, sales: "$amount"}},
            { $group: { _id: "$month", total_income: { $sum : "$sales" }}}
        ])
        response.status(200).json(data)
    } catch(err) {
        response.status(500).json(err)
    }
})

//CREATE
router.post('/', verifyToken, async (request, response) => {
    const order = Order(request.body)
    try {
      const newOrder = await order.save()
      console.log(newOrder)
      response.status(201).json(newOrder)
    } catch (err) {
      response.status(500).json(err)
    }
  }
)

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, async (request, response) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      request.params.id,
      {
        $set: request.body,
      },
      { new: true }
    )
    response.status(200).json(updatedOrder)
  } catch (err) {
    response.status(500).json(err)
  }
})

//DELETE
router.delete('/:id', verifyTokenAndAuthorization, async (request, response) => {
  try {
    await Order.findByIdAndDelete(request.params.id)
    response.status(200).json('Order deleted')
  } catch (err) {
    response.status(500).json(err)
  }
})

//GET USER OREDER
router.get('/:userId', verifyTokenAndAuthorization, async (request, response) => {
  try {
    const order = await Order.find({
        userId: request.params.userId
    })
    response.status(200).json(order)
  } catch (err) {
    response.status(500).json(err)
  }
})

//GET All ORDERS
router.get('/', verifyTokenAndAdmin, async (request, response) => {
  try {
    const orders = await Order.find()
    response.status(200).json(orders)
  } catch (err) {
    response.status(500).json(err)
  }
})

export default router
