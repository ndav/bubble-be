/* eslint-disable @typescript-eslint/ban-ts-comment */
/* istanbul ignore file */
import { DbManager } from './DbManager'
import { ConnectionOptions } from 'typeorm'
import { mock } from 'jest-mock-extended'

describe('DbManager', () => {
  it('should exist', async () => {
    const readConnectionMock = mock<ConnectionOptions>()
    const writeConnectionMock = mock<ConnectionOptions>()

    // @ts-ignore
    const db = new DbManager(readConnectionMock, writeConnectionMock)
    expect(db).toBeDefined()
  })

  it('should throw an error if the read connection is not initialised', async () => {
    const readConnectionMock = mock<ConnectionOptions>({ type: 'postgres' })
    const writeConnectionMock = mock<ConnectionOptions>({ type: 'postgres' })

    const db = new DbManager(readConnectionMock, writeConnectionMock)

    expect(db).toBeDefined()
    expect(() => {
      db.readOnlyDbConnection
    }).toThrow(new Error('Database connections not initialised'))
  })

  it('should throw an error if the write connection is not initialised', async () => {
    const readConnectionMock = mock<ConnectionOptions>()
    const writeConnectionMock = mock<ConnectionOptions>()

    const db = new DbManager(readConnectionMock, writeConnectionMock)

    expect(db).toBeDefined()
    expect(() => {
      db.readWriteDbConnection
    }).toThrow(new Error('Database connections not initialised'))
  })
})
