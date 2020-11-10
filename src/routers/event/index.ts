import express from 'express'

import { Db } from '../../db'
import { EventController } from '../../controllers'
import { BookingService, InjestService } from '../../services'

const bookingService = new BookingService(Db.getInstance())
const injestService = new InjestService(bookingService)
const eventController = new EventController(injestService)

const insightRouter = express.Router()

insightRouter.get('/injest-bookings', eventController.injestBookings)

export default insightRouter
