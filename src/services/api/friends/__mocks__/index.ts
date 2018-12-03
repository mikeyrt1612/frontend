import { IFriendsData } from '../model'

export const friendsMockData: IFriendsData = [
  {
    _id: '_ID 0',
    name: {
      first: 'FIRST 0',
      last: 'LAST 0',
      full: 'FULL 0',
    },
    profileImage: 'PROFILE IMAGE 0',
  },
  {
    _id: '_ID 1',
    name: {
      first: 'FIRST 1',
      last: 'LAST 1',
      full: 'FULL 1',
    },
    profileImage: 'PROFILE IMAGE 1',
  },
  {
    _id: '_ID 2',
    name: {
      first: 'FIRST 2',
      last: 'LAST 2',
      full: 'FULL 2',
    },
    profileImage: 'PROFILE IMAGE 2',
  },
]

export const getFriends = jest.fn(() => ({ data: friendsMockData }))
