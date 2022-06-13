const Killmail = require('../models/killmailModel')
const logger = require('../logger/index')

const getKillmails = async (inRequest, inResponse) => {

  try {
     const killmails = await Killmail.find()
     logger.info("test")
     
     inResponse.status(200).json(killmails)
     
  } catch (error) {
    inResponse.status(400).json({ error })
  }
  
}

const deleteKillmails = async (inRequest, inResponse) => {
  inResponse.status(200).json({ message: `Delete killmail ${inRequest.params.id}` })
}

module.exports = {
  getKillmails,
  deleteKillmails,
}