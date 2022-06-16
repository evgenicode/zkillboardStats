const express = require('express')
const router = express.Router()
const needle = require('needle')
const apicache = require('apicache')


const TEST_ID = process.env.TEST_ID
const API_BASE_URL = `https://zkillboard.com/api/characterID/${TEST_ID}/`
const HEADER_USER_AGENT = process.env.HEADER_USER_AGENT

const Killmail = require('../models/killmailModel')
const { getKillmails } = require('./killmailController')

// Init cache
let cache = apicache.middleware

// For testing only
router.get('/', cache('5 minutes'), async (inRequest, inResponse) => {
  try {
    inRequest.headers['user-agent'] = `${HEADER_USER_AGENT}`
    const apiResponse = await needle('get', `${API_BASE_URL}`)

    apiResponse.body.forEach(element => {
      Killmail.findOne({ killmail_id: element.killmail_id }, function (error, killmail) {
        if (error) return handleError(error)
        if (killmail === null) {
          element = new Killmail({
            killmail_id: element.killmail_id,
            zkb: element.zkb,
          })
          element.save()
        } else { return }
      })
    });

    inResponse.status(200).json(apiResponse.body)
  } catch (error) {
    inResponse.status(500).json({error})
  }
  
})

async function test () {
  //console.log("start")
  const options = {
    headers: {'maintainer': `${HEADER_USER_AGENT}`}
  }
  needle.get(`${API_BASE_URL}`, options, function(error, inResponse) {
    if (!error && inResponse.statusCode == 200)
    console.log("zkillboardAPICall")
    inResponse.body.forEach(element => {
      Killmail.findOne({ killmail_id: element.killmail_id }, function (error, killmail) {
        if (error) return handleError(error)
        if (killmail === null) {
          element = new Killmail({
            killmail_id: element.killmail_id,
            zkb: element.zkb,
          })
          element.save()
        } else { 
          console.log("duplicate")
          return 
        }
      })
    })


    if (error) {
      console.log(error)
    }
  })
  //console.log("end")
    
}

//setInterval(test, 10000)



module.exports = router