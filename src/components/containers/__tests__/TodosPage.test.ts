import { mapDispatchToProps } from '../TodosPage'
import { getTodosRequest } from '@store/todos/actions'

describe('TodosPage container', () => {
  test('should map "getTodos" correctly', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).getTodos()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(getTodosRequest())
  })
})
