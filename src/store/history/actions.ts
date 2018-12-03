import { createStandardAction } from 'typesafe-actions'

import * as types from '@store/history/actionTypes'
import { IHistoryData } from '@services/api/history/model'
import { IError } from '@services/model'

export const getHistoryRequest = createStandardAction(types.GET_HISTORY_REQUEST)()

export const getHistorySuccess = createStandardAction(types.GET_HISTORY_SUCCESS)<IHistoryData>()

export const getHistoryError = createStandardAction(types.GET_HISTORY_ERROR)<IError>()
