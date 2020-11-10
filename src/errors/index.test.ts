import { EntityNotPersisted, NotConfiguredError } from '.'

describe('EntityNotPersisted', () => {
  it('should exist and match the error signature', async () => {
    const error = new EntityNotPersisted()
    expect(error).toBeDefined
    expect(error).toBeInstanceOf(Error)
  })
})

describe('NotConfiguredError', () => {
  it('should exist and match the error signature', async () => {
    const error = new NotConfiguredError()
    expect(error).toBeDefined
    expect(error).toBeInstanceOf(Error)
  })
})
