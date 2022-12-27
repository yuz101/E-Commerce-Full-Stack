import Product from '../models/Product.js'
import express from 'express'
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from './verifyToken.js'

const router = express.Router()

//CREATE
router.post('/create', verifyTokenAndAdmin, async (request, response) => {
  const product = Product({
    title: request.body.title,
    description: request.body.description,
    img: request.body.img,
    categories: request.body.categories,
    size: request.body.size,
    color: request.body.color,
    price: request.body.price,
  })
  try {
    const newProduct = await product.save()
    response.status(201).json(newProduct)
  } catch (err) {
    response.status(500).json(err)
  }
})

// UPDATE
router.put('/:id', verifyTokenAndAdmin, async (request, response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      request.params.id,
      {
        $set: request.body,
      },
      { new: true }
    )

    response.status(200).json(updatedProduct)
  } catch (err) {
    response.status(500).json(err)
  }
})

//DELETE
router.delete('/:id', verifyTokenAndAdmin, async (request, response) => {
  try {
    await Product.findByIdAndDelete(request.params.id)
    response.status(200).json('Product deleted')
  } catch (err) {
    response.status(500).json(err)
  }
})

//GET
router.get('/getOne/:id', async (request, response) => {
  try {
    const product = await Product.findById(request.params.id)
    response.status(200).json(product)
  } catch (err) {
    response.status(500).json(err)
  }
})

//GET All PRODUCTS
router.get('/', async (request, response) => {
  const qNew = request.query.new
  const qCategory = request.query.category
  try {
    let products = []
    if (qNew) {
      products = await Product.find().limit(5).sort({ creadtedAt: -1 })
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      })
    } else {
      products = await Product.find()
    }
    response.status(200).json(products)
  } catch (err) {
    response.status(500).json(err)
  }
})

export default router
