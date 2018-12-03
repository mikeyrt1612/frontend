import { mapDispatchToProps } from '../Modal'
import { closeModal } from '@store/modal/actions'

describe('Modal container', () => {
  test('should map "closeModal" correctly', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).closeModal()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(closeModal())
  })
})
