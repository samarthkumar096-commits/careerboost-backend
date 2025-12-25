import express from 'express'
import Razorpay from 'razorpay'
import crypto from 'crypto'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_RvMV8TCAdy3ugd',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'your_razorpay_secret_key',
})

app.use(cors())
app.use(express.json())

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'CareerBoost AI Backend Server Running',
    payment: 'Razorpay',
    timestamp: new Date().toISOString()
  })
})

// Create Razorpay order
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency, planId, planName, userEmail, userName } = req.body

    if (!amount || !currency) {
      return res.status(400).json({
        success: false,
        error: 'Amount and currency are required',
      })
    }

    const options = {
      amount: amount,
      currency: currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        planId: planId || '',
        planName: planName || '',
        userEmail: userEmail || '',
        userName: userName || '',
      },
    }

    const order = await razorpay.orders.create(options)

    res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID || 'rzp_test_RvMV8TCAdy3ugd',
    })
  } catch (error) {
    console.error('Order creation error:', error)
    res.status(500).json({
      success: false,
      error: error.message,
    })
  }
})

// Verify Razorpay payment
app.post('/api/verify-payment', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, planId, userEmail } = req.body

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        error: 'Missing payment verification parameters',
      })
    }

    const sign = razorpay_order_id + '|' + razorpay_payment_id
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || 'your_razorpay_secret_key')
      .update(sign.toString())
      .digest('hex')

    if (razorpay_signature === expectedSign) {
      console.log('✅ Payment verified:', {
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        planId,
        userEmail,
      })

      res.json({
        success: true,
        message: 'Payment verified successfully',
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
      })
    } else {
      console.error('❌ Invalid signature')
      res.status(400).json({
        success: false,
        error: 'Invalid signature',
      })
    }
  } catch (error) {
    console.error('Payment verification error:', error)
    res.status(500).json({
      success: false,
      error: error.message,
    })
  }
})

// Razorpay webhook
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET
    const signature = req.headers['x-razorpay-signature']

    if (!secret) {
      console.warn('⚠️  Webhook secret not configured')
      return res.json({ status: 'ok', warning: 'Webhook secret not configured' })
    }

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(JSON.stringify(req.body))
      .digest('hex')

    if (signature === expectedSignature) {
      const event = req.body.event
      const payload = req.body.payload

      switch (event) {
        case 'payment.captured':
          console.log('💰 Payment captured:', payload.payment.entity.id)
          break
        case 'payment.failed':
          console.log('❌ Payment failed:', payload.payment.entity.id)
          break
        case 'subscription.activated':
          console.log('✅ Subscription activated:', payload.subscription.entity.id)
          break
        case 'subscription.cancelled':
          console.log('🚫 Subscription cancelled:', payload.subscription.entity.id)
          break
        default:
          console.log('ℹ️  Unhandled event:', event)
      }

      res.json({ status: 'ok' })
    } else {
      console.error('❌ Invalid webhook signature')
      res.status(400).json({ error: 'Invalid signature' })
    }
  } catch (error) {
    console.error('Webhook error:', error)
    res.status(500).json({ error: error.message })
  }
})

// Get payment details
app.get('/api/payment/:paymentId', async (req, res) => {
  try {
    const { paymentId } = req.params
    const payment = await razorpay.payments.fetch(paymentId)

    res.json({
      success: true,
      payment: {
        id: payment.id,
        amount: payment.amount,
        currency: payment.currency,
        status: payment.status,
        method: payment.method,
        email: payment.email,
        contact: payment.contact,
        createdAt: payment.created_at,
      },
    })
  } catch (error) {
    console.error('Fetch payment error:', error)
    res.status(500).json({
      success: false,
      error: error.message,
    })
  }
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    error: 'Something went wrong!',
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 CareerBoost AI Backend Server`)
  console.log(`📍 Running on port ${PORT}`)
  console.log(`💳 Razorpay payment API ready`)
  console.log(`🔑 Key ID: ${process.env.RAZORPAY_KEY_ID || 'rzp_test_RvMV8TCAdy3ugd'}`)
})

export default app
