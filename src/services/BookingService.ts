import config from '../config'
import { ActiveBookingSummary, BookingSummary } from '../__types'

import { log } from '.'
import BaseService from './BaseService'
import { BookingCreateOptions, BookingEntity } from '../db/entities'
import { DbSchemaInterface } from '../db'
import { BookingRepository } from '../db/repositories'

export interface BookingServiceInterface {
  getActiveSummary(): Promise<ActiveBookingSummary>
  getBookingInformation(id: string): Promise<BookingSummary>
  create(request: BookingCreateOptions): Promise<BookingEntity | null>
  get(): Promise<BookingEntity[]>
}

export class BookingService
  extends BaseService
  implements BookingServiceInterface {
  constructor(protected dbSchema: DbSchemaInterface) {
    super()
  }
  public async getActiveSummary(): Promise<ActiveBookingSummary> {
    try {
      const requestUrl = `${config.externalServiceBaseUrl}/booking/activesummary`
      const response = await (await this.getClient()).get<ActiveBookingSummary>(
        requestUrl,
        {}
      )
      return response.data
    } catch (error) {
      log.error(error)
      throw error
    }
  }

  public async getBookingInformation(id: string): Promise<BookingSummary> {
    try {
      const requestUrl = `${config.externalServiceBaseUrl}/booking/${id}`
      const response = await (await this.getClient()).get<BookingSummary>(
        requestUrl,
        {}
      )
      return response.data
    } catch (error) {
      log.error(error)
      throw error
    }
  }

  public async create(
    request: BookingCreateOptions
  ): Promise<BookingEntity | null> {
    const readOnly = false
    const transaction = await this.dbSchema.getTransaction(readOnly)
    try {
      const categoryRepository = this.dbSchema.getCustomRepository(
        transaction,
        BookingRepository
      )

      log.info(`[CategoryService::create] Creating Category`)

      const category: BookingEntity = categoryRepository.create({
        ...request,
      })

      const created: BookingEntity | null = await categoryRepository.save(
        category
      )
      await transaction.commitTransaction()

      return created
    } catch (error) {
      log.error(error)
      await transaction.rollbackTransaction()
      throw error
    } finally {
      transaction.release()
    }
  }

  public async get(): Promise<BookingEntity[]> {
    const queryRunner = await this.dbSchema.getQueryRunner()
    try {
      const bookingRepository = this.dbSchema.getCustomRepository(
        queryRunner,
        BookingRepository
      )

      const bookings = await bookingRepository.findAll()
      return bookings
    } catch (error) {
      log.error(error)
      throw error
    } finally {
      queryRunner.release()
    }
  }
}
