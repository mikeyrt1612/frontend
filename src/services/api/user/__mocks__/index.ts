import { IUserData } from '../model'

export const userMockData: IUserData = {
  _id: '_ID',
  name: {
    first: 'FIRST',
    last: 'LAST',
    full: 'FULL',
  },
  profileImage: 'PROFILE IMAGE',
}

export const getUser = jest.fn(() => ({ data: userMockData }))
