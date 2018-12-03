import { DeepReadonly } from 'utility-types'
import { EActionType } from '@services/api/history/model'

export type IHistoryItem = DeepReadonly<{
  actionType: EActionType,
  instigator: {
    name: {
      first: string,
      last: string,
      full: string,
    },
  }
  todo: string,
  created: string,
}>

export type IHistory = ReadonlyArray<IHistoryItem>

export type IState = Readonly<{
  loading: boolean,
  errorMessage?: string,
  data: IHistory,
}>
