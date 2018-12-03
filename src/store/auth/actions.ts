import { createStandardAction } from 'typesafe-actions'
import * as types from '@store/auth/actionTypes'
import { IError } from '@services/model'

export const signinRequest = createStandardAction(types.SIGNIN_REQUEST)<{
  username: string,
  password: string,
}>()

export const signinSuccess = createStandardAction(types.SIGNIN_SUCCESS)<{
  redirect?: boolean,
  token: string,
}>()

export const signinError = createStandardAction(types.SIGNIN_ERROR)<IError>()

export const signout = createStandardAction(types.SIGNOUT)()
