const express = require('express')
const router = express.Router()
const needle = require('needle')
const apicache = require('apicache')

const TEST_ID = process.env.TEST_ID
const API_BASE_URL = `https://zkillboard.com/api/characterID/${TEST_ID}/`

const Killmail = require('../models/killmailModel')

// Init cache
let cache = apicache.middleware

router.get('/', cache('5 minutes'), async (inRequest, inResponse) => {
  try {
    const apiResponse = await needle('get', `${API_BASE_URL}`)

    apiResponse.body.forEach(element => {
      element = new Killmail({
        killmail_id: element.killmail_id,
        zkb: element.zkb,
      })
      
      element.save()
    });

    inResponse.status(200).json(apiResponse.body)
  } catch (error) {
    inResponse.status(500).json({error})
  }
  
})

module.exports = router