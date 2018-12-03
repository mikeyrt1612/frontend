import { createStandardAction } from 'typesafe-actions'
import * as types from '@store/friends/actionTypes'

import { IError } from '@services/model'
import { IFriendsData } from '@services/api/friends/model'

export const getFriendsRequest = createStandardAction(types.GET_FRIENDS_REQUEST)()

export const getFriendsSuccess = createStandardAction(types.GET_FRIENDS_SUCCESS)<IFriendsData>()

export const getFriendsError = createStandardAction(types.GET_FRIENDS_ERROR)<IError>()
