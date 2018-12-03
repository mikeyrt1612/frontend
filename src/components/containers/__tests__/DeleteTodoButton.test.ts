import { mapDispatchToProps } from '../DeleteTodoButton'
import { openModal } from '@store/modal/actions'
import { IModalConfig } from '@store/modal/model'
import { deleteTodosRequest } from '@store/todos/actions'

const mockTodoId = 'MOCK'
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

describe('DeleteTodoButton container', () => {
  test('should map "openModal" correctly', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch, { todoId: mockTodoId }).openModal(mockModal)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(openModal(mockModal))
  })

  test('should delete "deleteTodo" correctly', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch, { todoId: mockTodoId }).deleteTodo()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(deleteTodosRequest({ todoId: mockTodoId }))
  })
})
