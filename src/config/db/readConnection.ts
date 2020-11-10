import * as dotenv from 'dotenv'
import 'reflect-metadata'
import { ConnectionOptions } from 'typeorm'
import config from '../../config'

dotenv.config()

const postgresConnection: ConnectionOptions = {
  host: config.db?.host,
  type: 'postgres',
  name: 'read-connection',
  port: (config.db?.port as unknown) as number,
  username: config.db?.user,
  password: config.db?.password,
  database: config.db?.database,
  synchronize: false,
  logging: true,
  schema: config.db?.schemas,
  ssl: config.db?.ssl || false,
}

export = postgresConnection
