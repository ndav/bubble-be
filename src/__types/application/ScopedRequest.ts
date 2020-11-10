/* eslint-disable @typescript-eslint/no-empty-interface */
import { Request } from 'express'

export interface Scope {}

export type ScopedRequest = Request & {
  correlationId: string
  scope: Scope
}
