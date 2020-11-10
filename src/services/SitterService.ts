import config from '../config'

import { log } from '.'
import { IUser } from '__types'
import BaseService from './BaseService'

export interface SitterServiceInterface {
  get(): Promise<IUser[]>
}

export class SitterService
  extends BaseService
  implements SitterServiceInterface {
  public async get(): Promise<IUser[]> {
    try {
      const requestUrl = `${config.externalServiceBaseUrl}/search`
      const response = await (await this.getClient())
        .get<IUser[]>(requestUrl, {})
        .catch(() => {
          return { data: [] }
        })
      return response.data
    } catch (error) {
      log.error(error)
      throw error
    }
  }
}
