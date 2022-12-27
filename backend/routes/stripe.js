import express from 'express'
import Stripe from 'stripe'
const stripe = Stripe('sk_test_51MHCUVAw5s6395e6BBKXLMgmQizBhXeFp015SHynFG6gw6dfvmmPg7HAwxns3R541oNM69E4ygNd6FVymUBc1eHu00PoDvIoxV')
const router = express.Router()

router.post('/checkout', async (req, res) => {
  const cartItems = req.body.cartItems.map((item) => {
    return {
      price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
            images: item.img,
          },
          unit_amount: item.price * item.selectedQuantity * 100,
        },
        quantity: item.selectedQuantity,
    }
  })
  const session = await stripe.checkout.sessions.create({
    line_items: cartItems,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url:  `${process.env.CLIENT_URL}/`,
  });

  res.send({url: session.url});
});


export default router