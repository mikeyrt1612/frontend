import { DeepReadonly } from 'utility-types'

export type IUser = DeepReadonly<{
  _id: string,
  name: {
    first: string,
    last: string,
    full: string,
  },
  profileImage: string,
}>

export type IState = Readonly<{
  loading: boolean,
  errorMessage?: string,
  data: IUser,
}>
