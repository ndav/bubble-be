/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
const mockedDbSchemaModule = jest.genMockFromModule('..')

// @ts-ignore
const mockedDbSchema = mockedDbSchemaModule.default as Dbschema

interface Dbschema {
  closeDatabaseConnections: any
  initialiseDatabaseConnections: any
  getTransaction: any
  getCustomRepository: any
}

mockedDbSchema.getTransaction.mockReturnValue({
  commitTransaction: jest.fn(),
  rollbackTransaction: jest.fn(),
  release: jest.fn(),
})

module.exports = {
  // @ts-ignore
  ...mockedDbSchemaModule,
  default: mockedDbSchema,
}
