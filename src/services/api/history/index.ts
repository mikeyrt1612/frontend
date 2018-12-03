import axios, { AxiosPromise } from 'axios'

import { IHistoryData } from './model'

export const getHistory = (): AxiosPromise<IHistoryData> =>
  axios.get('/api/history')
