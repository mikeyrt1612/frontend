import { IHistoryData, EActionType } from '../model'

export const historyMockData: IHistoryData = [
  {
    actionType: EActionType.CREATED,
    instigator: {
      name: {
        first: 'FIRST 0',
        last: 'LAST 0',
        full: 'FULL 0',
      },
    },
    todo: 'TODO 0',
    created: '1970 00:00:00 UTC',
  },
  {
    actionType: EActionType.DELETED,
    instigator: {
      name: {
        first: 'FIRST 1',
        last: 'LAST 1',
        full: 'FULL 1',
      },
    },
    todo: 'TODO 1',
    created: '1970 00:00:00 UTC',
  },
  {
    actionType: EActionType.RECEIVED,
    instigator: {
      name: {
        first: 'FIRST 2',
        last: 'LAST 2',
        full: 'FULL 2',
      },
    },
    todo: 'TODO 2',
    created: '1970 00:00:00 UTC',
  },
  {
    actionType: EActionType.SENT,
    instigator: {
      name: {
        first: 'FIRST 3',
        last: 'LAST 3',
        full: 'FULL 3',
      },
    },
    todo: 'TODO 3',
    created: '1970 00:00:00 UTC',
  },
]

export const getHistory = jest.fn(() => ({ data: historyMockData }))
