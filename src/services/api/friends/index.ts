import axios, { AxiosPromise } from 'axios'

import { IFriendsData } from './model'

export const getFriends = (): AxiosPromise<IFriendsData> =>
  axios.get('/api/friends')
