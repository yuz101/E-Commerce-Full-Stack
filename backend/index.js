import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import productRoute from './routes/product.js'
import cartRoute from './routes/cart.js'
import orderRoute from './routes/order.js'
const app = express()
dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB connection success'))
  .catch((error) => console.log(error))
app.use(express.json())
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/products', productRoute)
app.use('/api/v1/carts', cartRoute)
app.use('/api/v1/orders', orderRoute)

app.listen(process.env.PORT || 3000, () => {
  console.log('Backend server is running')
})
