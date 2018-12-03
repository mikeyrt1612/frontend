import container, { mapDispatchToProps } from '../CreateTodoButton'
import { IModalConfig } from '@store/modal/model'
import { openModal } from '@store/modal/actions'
import { postTodosRequest } from '@store/todos/actions'

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

describe('CreateTodoButton container', () => {
  test('should map "openModal" correctly', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).openModal(mockModal)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(openModal(mockModal))
  })

  test('should map "createTodo" correctly', () => {
    const dispatch = jest.fn()
    const message = 'MOCK'
    mapDispatchToProps(dispatch).createTodo(message)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(postTodosRequest({ message }))
  })
})
