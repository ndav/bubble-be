import { ApplicationDbConfig } from './'

export interface ApplicationConfig {
  basePath: string
  externalServiceBaseUrl: string
  db?: ApplicationDbConfig
  env: string
  name: string
  port: number
}
