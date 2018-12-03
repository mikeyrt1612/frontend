import React, { Fragment } from 'react'
import LabelPrimary from '@components/atoms/LabelPrimary'
import { IModalConfig } from '@store/modal/model'

export type ISendTodo = (recipientId: string) => void

export default (fullName: string, sendTodo: ISendTodo, id: string): IModalConfig => ({
  header: {
    label: 'Send Todo',
    icon: 'mail',
  },
  content: (
    <Fragment>
      <span>Are you sure you want to send </span>
      <LabelPrimary text={fullName} />
      <span> this todo?</span>
    </Fragment>
  ),
  action: {
    label: 'Send',
    callback: () => { sendTodo(id) },
  },
})
