const Killmail = require('../models/killmailModel')
const logger = require('../logger/index')
const needle = require('needle') // For testing only


const getKillmails = async (inRequest, inResponse) => {

  try {
     const killmails = await Killmail.find()
     logger.info("killmail controller request")
     console.log("killmail controller request")
     inResponse.status(200).json(killmails)
     
  } catch (error) {
    inResponse.status(400).json({ error })
  }
  
}

const deleteKillmails = async (inRequest, inResponse) => {
  inResponse.status(200).json({ message: `Delete killmail ${inRequest.params.id}` })
}


// Save for testing
// function test() {
//   needle.get('http://127.0.0.1:5000/killmail', function(error, response) {
//     if(!error && response.statusCode == 200)
//     console.log("request from needle")
//   })
// }

// setInterval(test, 10000)



module.exports = {
  getKillmails,
  deleteKillmails,
}