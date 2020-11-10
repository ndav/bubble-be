export interface ApplicationDbConfig {
  connector: string
  database: string
  host: string
  password: string
  port: string
  user: string
  schemas: string
  ssl?: boolean
}
