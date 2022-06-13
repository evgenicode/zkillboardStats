const express = require('express')
require('dotenv').config()
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const connectDB = require('./config/db')


const PORT = process.env.PORT || 5000

connectDB()

const app = express()
app.set('trust proxy', 1) // rate limiter hosting. https://www.npmjs.com/package/express-rate-limit

// Rate limiting, zkillboard asks to be polite
const zkillLimiter = rateLimit({
  windowMs: 10 * 60 * 10000, //10 minutes
  max: 5
})
app.use('/api', zkillLimiter)



// Routes
app.use('/api', require('./routes/zkillAPIRoutes'))
app.use('/killmail', require('./routes/killmailRoutes'))



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})