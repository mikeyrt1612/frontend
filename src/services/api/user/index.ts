import axios, { AxiosPromise } from 'axios'

import { IUserData } from './model'

export const getUser = (): AxiosPromise<IUserData> =>
  axios.get('/api/user')
