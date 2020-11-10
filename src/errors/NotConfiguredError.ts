import { constants } from 'http2'

import { ErrorCode, ErrorMessage } from '__types'
import { BaseError } from '../__utils'

export class NotConfiguredError extends BaseError {
  constructor() {
    super(
      ErrorCode.NotConfiguredError,
      ErrorMessage.NotConfiguredError,
      constants.HTTP_STATUS_INTERNAL_SERVER_ERROR
    )
  }
}
