import Axios, { AxiosInstance } from 'axios'

import config from '../config'

export default class BaseService {
  instance: AxiosInstance

  public async getClient(): Promise<AxiosInstance> {
    this.instance = Axios.create({
      baseURL: config.externalServiceBaseUrl,
      headers: { Authorization: `Bearer ${this.getAuth()}` },
      responseType: 'json',
    })

    return this.instance
  }

  /**
   * This would request auth or something simlar (or the
   * JWT would be provided via the interface and proxied through)
   */
  public getAuth(): string {
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVmNDRkM2ZmMzM2ZjE4MDc2NGYxMjY1ZiIsInR5cGUiOiJtb2JpbGUiLCJpYXQiOjE2MDUwMTUwNDIsImV4cCI6MTY0OTI1MTg0Mn0.zswIZYoyQ-QSX5xaHJ24JoS7s3mWkjAKRs-6UgGutx4'
  }
}
