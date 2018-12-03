import React, { FormEvent, Fragment } from 'react'
import { TextArea, TextAreaProps } from 'semantic-ui-react'
import { IModalConfig } from '@store/modal/model'
import styled from 'styled-components'

export const TodoInput = styled(TextArea)`
  min-height: 80px;
  resize: none;
  width: 100%;
`

export interface IContentData {
  message: string,
}

export type ICreateTodo = (message: string) => void

export default (createTodo: ICreateTodo): IModalConfig<IContentData> => ({
  header: {
    label: 'Create Todo',
    icon: 'write',
  },
  content: (update) => {
    update({ message: '' })
    return (
      <Fragment>
        <TodoInput
          // autoFocus breaks tests when using mount. JSDom bug...
          autoFocus={process.env.NODE_ENV !== 'test'}
          maxLength="128"
          onChange={
            (event: FormEvent<HTMLTextAreaElement>, { value }: TextAreaProps) => {
              update({ message: String(value) })
            }
          }
        />
      </Fragment>
    )
  },
  action: {
    label: 'Create',
    callback: ({ message }) => { createTodo(message) },
    disabled: ({ message }) => message.length === 0,
  },
})
