import {
  Connection,
  ConnectionOptions,
  createConnections,
  getConnection,
} from 'typeorm'
import { BookingEntity } from './entities'

// Connect to the database
export class DbManager {
  protected readConnection: Connection
  protected writeConnection: Connection

  constructor(
    protected readConnectionOptions: ConnectionOptions,
    protected writeConnectionOptions: ConnectionOptions
  ) {}

  get readOnlyDbConnection(): Connection {
    if (!this.readConnection) {
      throw new Error('Database connections not initialised')
    }
    return this.readConnection
  }

  get readWriteDbConnection(): Connection {
    if (!this.writeConnection) {
      throw new Error('Database connections not initialised')
    }
    return this.writeConnection
  }

  public async setup(): Promise<Connection[]> {
    return await this.initTypeOrm()
  }

  public async close(): Promise<void> {
    if (!this.readConnection && !this.writeConnection) {
      throw new Error('Database connections not initialised')
    }
    try {
      if (this.readConnection) {
        await this.readConnection.close()
      }
      if (this.writeConnection) {
        await this.writeConnection.close()
      }
    } catch (e) {
      throw e
    }
  }

  private async initTypeOrm(): Promise<Connection[]> {
    try {
      /* NOTE: To prevent entitiy metadata issues and other
       reference issues between TS and JS, explicitly
       specify the entities for typeorm */
      const entities = [BookingEntity]

      const connections = await createConnections([
        {
          ...this.readConnectionOptions,
          entities,
        },
        {
          ...this.writeConnectionOptions,
          entities,
        },
      ])
      this.readConnection = getConnection('read-connection')
      this.writeConnection = getConnection('write-connection')
      return connections
    } catch (e) {
      throw e
    }
  }
}
