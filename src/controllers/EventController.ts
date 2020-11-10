import { NextFunction, Response } from 'express'
import { constants } from 'http2'

import { ScopedRequest } from '../__types'

import { InjestServiceInterface, log } from '../services'

class EventController {
  constructor(public injestService: InjestServiceInterface) {}

  public injestBookings = async (
    req: ScopedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      log.info('[EventController::injestBookings]')
      await this.injestService.injestBookings()
      res.sendStatus(constants.HTTP_STATUS_OK)
    } catch (err) {
      log.error(err)
      next(err)
    }
  }
}

export { EventController }
