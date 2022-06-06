const express = require('express')
const router = express.Router()
const needle = require('needle')

const API_BASE_URL = "https://zkillboard.com/api/characterID/2118421377/"

router.get('/', async (inRequest, inResponse) => {
  try {
    const apiResponse = await needle('get', `${API_BASE_URL}`)
    const data = apiResponse.body
  
    inResponse.status(200).json(data)
  } catch (error) {
    inResponse.status(500).json({error})
  }
  
})

module.exports = router