import * as express from 'express'

import swaggerExpressMiddleware from 'swagger-express-middleware'

const configureSwaggerMiddleware = (
  app: express.Express,
  swaggerFile: string
): Promise<swaggerExpressMiddleware.SwaggerMiddleware> => {
  return new Promise((resolve, reject) => {
    console.info('Swagger Middleware starting...')

    swaggerExpressMiddleware(
      swaggerFile,
      app,
      (err: Error, middleware: swaggerExpressMiddleware.SwaggerMiddleware) => {
        /* istanbul ignore next */
        if (err) {
          console.error('Swagger Middleware failed!')
          reject(err)
        }

        app.use(
          middleware.metadata(),
          middleware.CORS(),
          middleware.files(),
          middleware.parseRequest(),
          middleware.validateRequest()
        )

        console.info('Swagger Middleware started!')
        resolve(middleware)
      }
    )
  })
}

export default configureSwaggerMiddleware
