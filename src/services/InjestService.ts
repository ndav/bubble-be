import { BookingDto, BookingStatusTypes, BookingSummary } from '../__types'

import { BookingServiceInterface, log } from '.'
import BaseService from './BaseService'

export interface InjestServiceInterface {
  injestBookings(): Promise<void>
}

export class InjestService
  extends BaseService
  implements InjestServiceInterface {
  constructor(public bookingService: BookingServiceInterface) {
    super()
  }

  public async injestBookings(): Promise<void> {
    try {
      const bookings = await this.getBookingsToInjest()

      bookings.forEach(async (booking) => {
        await this.bookingService.create(booking)
      })
    } catch (error) {
      log.error(error)
      throw error
    }
  }

  /**
   * Calls the external api for booking requests. Ideally the endpoint
   * would be for all parents (authenticated using HMAC for example)
   */
  private async getBookingsToInjest(): Promise<BookingDto[]> {
    const bookings = await this.bookingService.getActiveSummary()

    const bookingInformation: BookingDto[] = []

    bookings.confirmedBookings.forEach((booking: BookingSummary) => {
      if (booking.bookingStatus === BookingStatusTypes.Accepted) {
        bookingInformation.push({
          externalId: booking.id,
          parentId: booking.parentId,
          start: booking.scheduledStart,
          duration: booking.scheduledDuration,
        })
      }
    })
    return bookingInformation
  }
}
