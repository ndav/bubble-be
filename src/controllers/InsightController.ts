import { NextFunction, Response } from 'express'
import { constants } from 'http2'

import { ScopedRequest } from '../__types'

import { InsightServiceInterface, log } from '../services'

class InsightController {
  constructor(public insightsService: InsightServiceInterface) {}

  public get = async (
    req: ScopedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      log.info('[InsightsController::get]')
      const response = await this.insightsService.getBookingInsights()
      res.status(constants.HTTP_STATUS_OK).send(response)
    } catch (err) {
      log.error(err)
      next(err)
    }
  }
}

export { InsightController }
