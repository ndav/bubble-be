/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import * as http from 'http'
import * as path from 'path'
import * as dotenv from 'dotenv'
import compression from 'compression'

import swagger from './middleware/swagger'
import router from './routers'
import config from './config'
import { log } from './services'
import { Db } from './db'

dotenv.config()

const app: express.Express = express()

export async function start(): Promise<http.Server> {
  const configureSecurityMiddleware = (app: express.Express): void => {
    app.use(helmet())
  }

  log.info('Using Config')
  log.info(JSON.stringify(config))

  log.info('Configuring Swagger.')
  const swaggerFile = path.resolve(__dirname, 'config/swagger.yaml')
  log.info(`Using: ${swaggerFile}`)
  await swagger(app, swaggerFile)

  configureSecurityMiddleware(app)

  const logFormat =
    ':date[iso] :method :url :status :res[content-length] - :response-time ms'
  app.use(morgan(logFormat, {}))

  app.use(
    express.urlencoded({
      extended: true,
    })
  )
  app.use(
    express.json({
      limit: '1mb',
    })
  )
  app.use(compression())

  app.use(config.basePath, router)

  log.info(`Initalising database connections`)
  const db = Db.getInstance()
  const connections = await db.initialiseDatabaseConnections()
  connections.map((connection: any) => {
    log.info(
      `${connection.name}: ${connection.options.username}@${connection.options.host}:${connection.options.port}\n`,
      `connected: ${connection.isConnected}`
    )
  })

  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'test') {
    app.listen(5008, () => {
      log.info(
        `Express server listening on port 5008 in development mode (liveness probe / readyness probe) (basepath: ${config.basePath}).`
      )
    })
  }

  return app.listen(config.port, () => {
    log.info(
      `Express server listening on port ${config.port} in development mode (basepath: ${config.basePath}).`
    )
  })
}

export default app
