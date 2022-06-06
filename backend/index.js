const express = require('express')
require('dotenv').config()
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (inRequest, inResponse) => {
  inResponse.send("Hello World!")
})

// Routes
app.use('/api', require('./routes/zkill'))


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})