const winston = require('winston')

const productionLogger = () => {
  return winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    //defaultMeta: { service: 'user-service' }, <= RFC what is this?
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ]
  })
}

module.exports = productionLogger