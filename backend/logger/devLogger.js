const winston = require('winston')
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp}  [${level}]: ${message}`
})

const devLogger = () => {
  return winston.createLogger({
    level: 'info',
    format: combine(
      //format.colorize(),
      timestamp({ format: "HH:mm:ss" }),
      myFormat
    ),
    //defaultMeta: { service: 'user-service' }, <= RFC what is this?
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ]
  })
}


module.exports = devLogger