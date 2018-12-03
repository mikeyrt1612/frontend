import { mapDispatchToProps } from '../SendTodoDropdown'
import { openModal } from '@store/modal/actions'
import { IModalConfig } from '@store/modal/model'
import { sendTodosRequest } from '@store/todos/actions'

const mockTodoId = 'MOCK'
const mockRecipientId = 'MOCK'
const mockModal: IModalConfig = {
  header: {
    icon: 'MOCK',
    label: 'MOCK',
  },
  content: 'MOCK',
  action: {
    label: 'MOCK',
    callback: () => {},
  },
}

describe('SendTodoDropdown container', () => {
  test('should map "openModal" correctly', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch, { todoId: mockTodoId }).openModal(mockModal)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(openModal(mockModal))
  })

  test('should map "sendTodo" correctly', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch, { todoId: mockTodoId }).sendTodo(mockRecipientId)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(sendTodosRequest({
      todoId: mockTodoId,
      recipientId: mockRecipientId,
    }))
  })
})
