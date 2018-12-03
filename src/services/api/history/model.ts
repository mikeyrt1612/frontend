export enum EActionType {
  CREATED = 'CREATED',
  DELETED = 'DELETED',
  SENT = 'SENT',
  RECEIVED = 'RECEIVED',
}

export type IHistoryData = Array<{
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
