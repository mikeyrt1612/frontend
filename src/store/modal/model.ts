import { ReactNode } from 'react'

export type IUpdateData<T> = (data: Partial<T>) => void

export type IUpdateCallback<T> = (update: IUpdateData<T>) => ReactNode

export type IModalConfig<T = any> = Readonly<{
  header: Readonly<{
    icon: string,
    label: string,
  }>,
  content: IUpdateCallback<T> | ReactNode | string,
  action: Readonly<{
    label: string,
    callback: (data: T) => void,
    disabled?: ((data: T) => boolean) | boolean,
  }>,
}>

export type IState = Readonly<{ isOpen: boolean, config: IModalConfig }>
