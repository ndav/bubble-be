process.env.BASE_PATH = ''
process.env.ENV = ''
process.env.NODE_ENV = ''
process.env.DB_CONNECTOR = ''
process.env.DB_NAME = ''
process.env.DB_HOST = ''
process.env.DB_PASSWORD = ''
process.env.DB_PORT = ''
process.env.DB_SCHEMA = ''
process.env.DB_USER = ''
process.env.TEST_DB_CONNECTOR = ''
process.env.TEST_DB_NAME = ''
process.env.TEST_DB_HOST = ''
process.env.TEST_DB_PASSWORD = ''
process.env.TEST_DB_PORT = ''
process.env.TEST_DB_SCHEMA = ''
process.env.TEST_DB_USER = ''
process.env.SERVICE_NAME = ''
process.env.PORT = ''

import config from '.'

describe('Configuration Object', () => {
  it('should define a default configuration for config.basePath', async () => {
    expect(config.basePath).toEqual('')
  })

  it('should define a default configuration for config.db?.connector', async () => {
    expect(config.db?.connector).toEqual('pg')
  })

  it('should define a default configuration for config.db?.database', async () => {
    expect(config.db?.database).toEqual('invalid-config')
  })

  it('should define an invalid configuration configuration for config.db?.host', async () => {
    expect(config.db?.host).toEqual('invalid-config')
  })

  it('should define an invalid configuration for config.db?.password no environment is found', async () => {
    expect(config.db?.password).toEqual('')
  })

  it('should define an invalid configuration for config.db?.port when none is supplied in the environment', async () => {
    expect(config.db?.port).toEqual('invalid-config')
  })

  it('should return an invalid configuration for config.db?.schemas if no environment is found', async () => {
    expect(config.db?.schemas).toEqual('invalid-config')
  })

  it('should define a default configuration for config.db?.user', async () => {
    expect(config.db?.user).toEqual('invalid-config')
  })

  it('should define a default configuration for config.name', async () => {
    expect(config.name).toEqual('user')
  })

  it('should define a default configuration for config.port', async () => {
    expect(config.port).toEqual(4008)
  })
})
