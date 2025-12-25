# 🚀 BACKEND DEPLOYMENT - MULTIPLE OPTIONS

## ✅ EASIEST OPTIONS (NO CREDIT CARD NEEDED)

---

## 1️⃣ VERCEL (RECOMMENDED) ⭐

### One-Click Deploy:
```
https://vercel.com/new/clone?repository-url=https://github.com/samarthkumar096-commits/careerboost-backend
```

### Manual Steps:
1. Go to: https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Import: `samarthkumar096-commits/careerboost-backend`
4. Add Environment Variables:
   ```
   RAZORPAY_KEY_ID = rzp_test_RvMV8TCAdy3ugd
   RAZORPAY_KEY_SECRET = [your_secret_key]
   ```
5. Click "Deploy"
6. Copy URL: `https://careerboost-backend.vercel.app`

---

## 2️⃣ RENDER.COM (FREE FOREVER) 🆓

### Steps:
1. Go to: https://render.com
2. Sign up with GitHub
3. Click "New" → "Web Service"
4. Connect: `samarthkumar096-commits/careerboost-backend`
5. Settings:
   ```
   Name: careerboost-backend
   Environment: Node
   Build Command: npm install
   Start Command: node index.js
   Plan: Free
   ```
6. Add Environment Variables:
   ```
   RAZORPAY_KEY_ID = rzp_test_RvMV8TCAdy3ugd
   RAZORPAY_KEY_SECRET = [your_secret_key]
   PORT = 3001
   ```
7. Click "Create Web Service"
8. Copy URL: `https://careerboost-backend.onrender.com`

**Note:** Free tier sleeps after 15 min inactivity

---

## 3️⃣ RAILWAY.APP (EASY) 🚂

### Steps:
1. Go to: https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select: `samarthkumar096-commits/careerboost-backend`
5. Add Environment Variables:
   ```
   RAZORPAY_KEY_ID = rzp_test_RvMV8TCAdy3ugd
   RAZORPAY_KEY_SECRET = [your_secret_key]
   ```
6. Railway auto-deploys
7. Click "Generate Domain"
8. Copy URL: `https://careerboost-backend.up.railway.app`

**Note:** $5 free credit monthly

---

## 4️⃣ GLITCH (INSTANT) ⚡

### Steps:
1. Go to: https://glitch.com
2. Click "New Project" → "Import from GitHub"
3. Paste: `https://github.com/samarthkumar096-commits/careerboost-backend`
4. Click ".env" file
5. Add:
   ```
   RAZORPAY_KEY_ID=rzp_test_RvMV8TCAdy3ugd
   RAZORPAY_KEY_SECRET=[your_secret_key]
   ```
6. Project auto-starts
7. Copy URL: `https://careerboost-backend.glitch.me`

**Note:** Free but sleeps after 5 min inactivity

---

## 5️⃣ CYCLIC.SH (SIMPLE) 🔄

### Steps:
1. Go to: https://cyclic.sh
2. Sign up with GitHub
3. Click "Deploy"
4. Select: `samarthkumar096-commits/careerboost-backend`
5. Add Environment Variables in dashboard
6. Auto-deploys
7. Copy URL: `https://careerboost-backend.cyclic.app`

---

## 🔑 GET RAZORPAY SECRET KEY

### Steps:
1. Go to: https://dashboard.razorpay.com
2. Sign up / Login
3. Go to: Settings → API Keys
4. Click "Generate Test Key"
5. Copy "Key Secret"
6. Use in deployment

**Test Key ID (already have):**
```
rzp_test_RvMV8TCAdy3ugd
```

---

## 📝 AFTER DEPLOYMENT

### 1. Copy Backend URL
Example: `https://careerboost-backend.vercel.app`

### 2. Update Frontend
Go to Vercel → careerboost-ai → Settings → Environment Variables

Add:
```
VITE_API_URL = [your_backend_url]
```

### 3. Redeploy Frontend
Vercel → Deployments → Redeploy

### 4. Test Payment
```
1. Open: https://careerboost-ai-two.vercel.app/pricing
2. Click "Get Started"
3. Razorpay modal opens
4. Use test card: 4111 1111 1111 1111
5. ✅ Success!
```

---

## 🧪 TEST BACKEND

### Health Check:
```bash
curl https://your-backend-url.vercel.app/api/health
```

### Should return:
```json
{
  "status": "ok",
  "message": "CareerBoost AI Backend Server Running",
  "payment": "Razorpay"
}
```

---

## ⚡ COMPARISON

| Platform | Free Tier | Sleep? | Speed | Ease |
|----------|-----------|--------|-------|------|
| Vercel | ✅ Yes | ❌ No | ⚡⚡⚡ | ⭐⭐⭐ |
| Render | ✅ Yes | ✅ 15min | ⚡⚡ | ⭐⭐⭐ |
| Railway | $5/mo | ❌ No | ⚡⚡⚡ | ⭐⭐ |
| Glitch | ✅ Yes | ✅ 5min | ⚡ | ⭐⭐⭐ |
| Cyclic | ✅ Yes | ❌ No | ⚡⚡ | ⭐⭐ |

---

## 🎯 RECOMMENDATION

**Best for Production:** Vercel
- No sleep
- Fast
- Easy
- Free

**Best for Testing:** Glitch
- Instant
- No config
- Free

**Best for Learning:** Render
- Simple
- Good docs
- Free

---

## 🚨 TROUBLESHOOTING

### Backend not responding?
1. Check deployment logs
2. Verify environment variables
3. Test health endpoint
4. Check Razorpay keys

### Payment still failing?
1. Verify VITE_API_URL in frontend
2. Check CORS settings
3. Test backend directly
4. Check browser console

---

## 📞 NEED HELP?

**Backend Repo:**
```
https://github.com/samarthkumar096-commits/careerboost-backend
```

**Issues:**
```
https://github.com/samarthkumar096-commits/careerboost-backend/issues
```

---

**Choose any platform and deploy in 5 minutes! 🚀**
