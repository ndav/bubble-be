import express from 'express'
import { constants } from 'http2'

import config from '../config'
import insightRouter from './insight'
import eventRouter from './event'

const router = express.Router()

router.get('/', (_, res) => res.sendStatus(200))
router.get('/healthcheck/ping', (_, res) => res.sendStatus(200))
router.get('/healthcheck/ready', async (_, res) => {
  res.status(constants.HTTP_STATUS_OK).send({
    message: 'ok',
    version: process.env.npm_package_version,
    service: config.name,
  })
})

router.use('/insight', insightRouter)
router.use('/event', eventRouter)

export default router
