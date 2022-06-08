const express = require('express')
const router = express.Router()
const { getKillmails, deleteKillmails } = require('../controllers/killmailController')

router.get('/', getKillmails)

// router.post('/', (inRequest, inResponse) => {
//   inResponse.status(200).json({ message: 'Create killmail' })
// })

// router.put('/:id', (inRequest, inResponse) => {
//   inResponse.status(200).json({ message: `Update killmail ${inRequest.params.id}` })
// })

router.delete('/:id', deleteKillmails)


module.exports = router