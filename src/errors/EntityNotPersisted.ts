import { constants } from 'http2'

import { ErrorCode, ErrorMessage } from '__types'
import { BaseError } from '../__utils'

export class EntityNotPersisted extends BaseError {
  constructor() {
    super(
      ErrorCode.EntityNotPersistedError,
      ErrorMessage.EntityNotPersistedError,
      constants.HTTP_STATUS_INTERNAL_SERVER_ERROR
    )
  }
}
