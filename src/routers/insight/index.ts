import express from 'express'

import { Db } from '../../db'
import { InsightController } from '../../controllers'
import { BookingService, InsightService } from '../../services'

const bookingService = new BookingService(Db.getInstance())
const insightsSerivce = new InsightService(bookingService)
const insightController = new InsightController(insightsSerivce)

const insightRouter = express.Router()

insightRouter.get('/', insightController.get)

export default insightRouter
