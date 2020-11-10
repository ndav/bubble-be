import moment from 'moment'
import { InsightDto } from '__types/dto'
import { BookingServiceInterface, log } from '.'

export interface InsightServiceInterface {
  getBookingInsights(): Promise<InsightDto>
}

export class InsightService implements InsightServiceInterface {
  constructor(public bookingService: BookingServiceInterface) {}

  public async getBookingInsights(): Promise<InsightDto> {
    log.info('[InsightsService::getBookingInsights] Getting booking insights')

    const bookings = await this.bookingService.get()

    const aggregate: InsightDto = {}

    // TODO: If time allowed i'd push these aggregations into the db
    bookings.map((booking) => {
      const key = moment(booking.start).format('YYYY-MM')
      aggregate[key] = {
        month: key,
        durationAggregate:
          (aggregate[key] ? aggregate[key].durationAggregate : 0) +
          booking.duration,
      }
    })

    return aggregate
  }
}
