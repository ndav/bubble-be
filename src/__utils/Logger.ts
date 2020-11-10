/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as winston from 'winston'

export default (level: any, service: string) => {
  const logger = winston.createLogger({
    level: level,
    format: winston.format.json(),
    defaultMeta: { service: service },
    transports: [],
  })

  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.simple()
      ),
    })
  )

  return logger
}
