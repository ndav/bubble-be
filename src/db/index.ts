/* eslint-disable @typescript-eslint/no-explicit-any */
import { Connection, ObjectType, QueryRunner, ConnectionOptions } from 'typeorm'
import { IsolationLevel } from 'typeorm/driver/types/IsolationLevel'

import { DbManager } from './DbManager'
import { readConnection, writeConnection } from '../config/db'

export interface DbSchemaInterface {
  initialiseDatabaseConnections(): Promise<Connection[]>
  closeDatabaseConnections(): Promise<void>
  getTransaction(
    readOnly?: boolean,
    isolationLevel?: IsolationLevel
  ): Promise<QueryRunner>
  getQueryRunner(): Promise<QueryRunner>
  getCustomRepository<T>(
    queryRunner: QueryRunner,
    customRepository: ObjectType<T>
  ): T
}

class Db implements DbSchemaInterface {
  private static instance: Db

  dbManager: any

  constructor(
    public readConnectionOptions: ConnectionOptions,
    public writeConnectionOptions: ConnectionOptions
  ) {
    this.dbManager = new DbManager(
      readConnectionOptions,
      writeConnectionOptions
    )
  }

  public static getInstance(): Db {
    if (!Db.instance) {
      Db.instance = new Db(readConnection, writeConnection)
    }
    return Db.instance
  }

  getDbManager(): DbManager {
    return this.dbManager
  }

  async closeDatabaseConnections(): Promise<void> {
    return this.getDbManager().close()
  }

  async initialiseDatabaseConnections(): Promise<Connection[]> {
    return this.getDbManager().setup()
  }

  async getTransaction(
    readOnly = true,
    isolationLevel: IsolationLevel = 'SERIALIZABLE'
  ): Promise<QueryRunner> {
    const connection: Connection = readOnly
      ? this.getDbManager().readOnlyDbConnection
      : this.getDbManager().readWriteDbConnection
    const queryRunner = connection.createQueryRunner()
    await queryRunner.startTransaction(isolationLevel)
    if (readOnly && isolationLevel === 'SERIALIZABLE') {
      queryRunner.query(
        'SET TRANSACTION ISOLATION LEVEL SERIALIZABLE READ ONLY DEFERRABLE'
      )
    }

    return queryRunner
  }

  async getQueryRunner(): Promise<QueryRunner> {
    const connection: Connection = this.getDbManager().readOnlyDbConnection
    const queryRunner = await connection.createQueryRunner()
    return queryRunner
  }

  getCustomRepository<T>(
    queryRunner: QueryRunner,
    customRepository: ObjectType<T>
  ): T {
    const entityManager = queryRunner.manager
    return entityManager.getCustomRepository(customRepository)
  }
}

export { Db }
