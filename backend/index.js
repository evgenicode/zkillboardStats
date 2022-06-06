const express = require('express')
require('dotenv').config()


const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (inRequest, inResponse) => {
  inResponse.send("Hello World!")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})