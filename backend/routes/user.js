import express, { request, response } from 'express'
import CryptoJS from 'crypto-js'
import User from '../models/User.js'
import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from './verifyToken.js'
const router = express.Router()

//GET USER STATS (Must be on the top, othersie overlap with get id method)
router.get('/stats', verifyTokenAndAdmin, async (request, response) => {
  const date = new Date()
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      { $project: { month: { $month: '$createdAt' } } },
      { $group: { _id: '$month', total_users: { $sum: 1 } } },
    ])
    response.status(200).json(data)
  } catch (err) {
    response.status(500).json(err)
  }
})

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, async (request, response) => {
  if (request.body.password) {
    request.body.password = CryptoJS.AES.encrypt(
      request.body.password,
      process.env.PASSWORD_SEC
    ).toString()
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      request.params.id,
      {
        $set: request.body,
      },
      { new: true }
    )

    response.status(200).json(updatedUser)
  } catch (err) {
    response.status(500).json(err)
  }
})

//DELETE
router.delete('/:id', verifyTokenAndAdmin, async (request, response) => {
  try {
    await User.findByIdAndDelete(request.params.id)
    response.status(200).json('User deleted')
  } catch (err) {
    response.status(500).json(err)
  }
})

//GET
router.get('/:id', verifyTokenAndAdmin, async (request, response) => {
  try {
    const user = await User.findById(request.params.id)
    const { password, ...others } = user._doc
    response.status(200).json(others)
  } catch (err) {
    response.status(500).json(err)
  }
})

//GET All USERS
router.get('/', verifyTokenAndAdmin, async (request, response) => {
  const query = request.query.new
  try {
    const users = query ? await User.find().limit(5) : await User.find()
    const securedUsers = users.map((user) => {
      const { password, ...others } = user._doc
      return others
    })

    response.status(200).json(securedUsers)
  } catch (err) {
    response.status(500).json(err)
  }
})

export default router
