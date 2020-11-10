import { ApplicationConfig } from '../__types'
import * as dotenv from 'dotenv'

dotenv.config()

const isTest = process.env.NODE_ENV === 'test' ? true : false
const INVALID_CONFIG = 'invalid-config'

const convertToBool = (value: string | number | undefined): boolean => {
  if (value && (value === 'true' || value === 1)) {
    return true
  }
  return false
}

const config: ApplicationConfig = {
  basePath: process.env.BASE_PATH || '',
  externalServiceBaseUrl: 'http://api-staging.joinbubble.co.uk/api',
  db: {
    connector:
      (isTest ? process.env.TEST_DB_CONNECTOR : process.env.DB_CONNECTOR) ||
      'pg',
    database:
      (isTest ? process.env.TEST_DB_NAME : process.env.DB_NAME) ||
      INVALID_CONFIG,
    host:
      (isTest ? process.env.TEST_DB_HOST : process.env.DB_HOST) ||
      INVALID_CONFIG,
    password:
      (isTest ? process.env.TEST_DB_PASSWORD : process.env.DB_PASSWORD) || '',
    port:
      (isTest ? process.env.TEST_DB_PORT : process.env.DB_PORT) ||
      INVALID_CONFIG,
    schemas:
      (isTest ? process.env.TEST_DB_SCHEMA : process.env.DB_SCHEMA) ||
      INVALID_CONFIG,
    user:
      (isTest ? process.env.TEST_DB_USER : process.env.DB_USER) ||
      INVALID_CONFIG,
    ssl:
      (isTest
        ? convertToBool(process.env.TEST_DB_SCHEMA_SSL)
        : convertToBool(process.env.DB_SCHEMA_SSL)) || false,
  },
  env: process.env.NODE_ENV || 'test',
  name: process.env.SERVICE_NAME || 'user',
  port: parseInt(process.env.PORT || '4008', 10),
}

export default config
