import axios, { AxiosPromise } from 'axios'

import { ISigninData } from './model'

export const signin = (username: string, password: string): AxiosPromise<ISigninData> =>
  axios.post('/signin', { username, password })
