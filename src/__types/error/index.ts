const enum ErrorCode {
  NotConfiguredError = 'CORE-01',
  EntityNotPersistedError = 'DB-01',
}

const enum ErrorMessage {
  NotConfiguredError = 'NotConfiguredError',
  EntityNotPersistedError = 'EntityNotPersistedError',
}

export { ErrorCode, ErrorMessage }
