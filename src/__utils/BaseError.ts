import { ErrorCode, ErrorMessage } from '__types'

export default class BaseError extends Error {
  constructor(
    public code: ErrorCode,
    public message: ErrorMessage,
    public statusCode?: number
  ) {
    super()
  }
}
