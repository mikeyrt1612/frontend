import { createStandardAction } from 'typesafe-actions'

import * as types from '@store/user/actionTypes'
import { IUserData } from '@services/api/user/model'
import { IError } from '@services/model'

export const getUserRequest = createStandardAction(types.GET_USER_REQUEST)()

export const getUserSuccess = createStandardAction(types.GET_USER_SUCCESS)<IUserData>()

export const getUserError = createStandardAction(types.GET_USER_ERROR)<IError>()
