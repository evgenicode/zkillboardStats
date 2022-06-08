const mongoose = require('mongoose')

const killmailSchema = mongoose.Schema(
  {
    "killmail_id": Number,
    "zkb": {
        "locationID": Number,
        "hash": String,
        "fittedValue": Number,
        "droppedValue": Number,
        "destroyedValue": Number,
        "totalValue": Number,
        "points": Number,
        "npc": Boolean,
        "solo": Boolean,
        "awox": Boolean
    }
}
)

module.exports = mongoose.model('Killmail', killmailSchema)