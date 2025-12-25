# CareerBoost AI Backend

Backend API server for CareerBoost AI with Razorpay payment integration.

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/samarthkumar096-commits/careerboost-backend)

## 📦 Features

- ✅ Razorpay payment integration
- ✅ Order creation endpoint
- ✅ Payment verification
- ✅ Webhook handling
- ✅ CORS enabled
- ✅ Error handling

## 🔧 Environment Variables

Add these in Vercel dashboard:

```env
RAZORPAY_KEY_ID=rzp_test_RvMV8TCAdy3ugd
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
```

## 📡 API Endpoints

### Health Check
```
GET /api/health
```

### Create Order
```
POST /api/create-order
Body: {
  amount: 29900,
  currency: "INR",
  planId: "monthly",
  planName: "Pro Monthly",
  userEmail: "user@example.com",
  userName: "John Doe"
}
```

### Verify Payment
```
POST /api/verify-payment
Body: {
  razorpay_order_id: "order_xxx",
  razorpay_payment_id: "pay_xxx",
  razorpay_signature: "signature_xxx",
  planId: "monthly",
  userEmail: "user@example.com"
}
```

### Webhook
```
POST /api/webhook
```

### Get Payment Details
```
GET /api/payment/:paymentId
```

## 🚀 Deployment Steps

### 1. Deploy to Vercel

```bash
# Option 1: One-click deploy
Click the "Deploy with Vercel" button above

# Option 2: Vercel CLI
npm i -g vercel
vercel
```

### 2. Add Environment Variables

Go to Vercel Dashboard → Settings → Environment Variables

Add:
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `RAZORPAY_WEBHOOK_SECRET`

### 3. Get Your Backend URL

After deployment, copy your URL:
```
https://careerboost-backend.vercel.app
```

### 4. Update Frontend

In your frontend repo, update `.env`:
```env
VITE_API_URL=https://careerboost-backend.vercel.app
```

## 🧪 Testing

### Test Health Endpoint
```bash
curl https://your-backend-url.vercel.app/api/health
```

### Test Order Creation
```bash
curl -X POST https://your-backend-url.vercel.app/api/create-order \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 29900,
    "currency": "INR",
    "planId": "monthly"
  }'
```

## 🔐 Security

- ✅ Payment signature verification
- ✅ Webhook signature verification
- ✅ Environment variables for secrets
- ✅ CORS enabled
- ✅ Error handling

## 📝 Local Development

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your Razorpay keys to .env

# Start server
npm run dev
```

Server runs on `http://localhost:3001`

## 🔗 Links

- Frontend: https://github.com/samarthkumar096-commits/careerboost-ai
- Razorpay Docs: https://razorpay.com/docs/
- Vercel Docs: https://vercel.com/docs

## 📞 Support

For issues, open a GitHub issue or contact support.

---

**Made with ❤️ by CareerBoost AI Team**
