const devLogger = require('./devLogger')
const productionLogger = require('./productionLogger')

let logger = null

const NODE_ENV = process.env.NODE_ENV

if (NODE_ENV === 'development') {
  logger = devLogger()
}

if (NODE_ENV === 'production') {
  logger = productionLogger()
}

module.exports = logger