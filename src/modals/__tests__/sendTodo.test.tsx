import React, { Fragment, cloneElement } from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { Button, Modal as SemanticModal } from 'semantic-ui-react'

import sendTodo from '../sendTodo'
import Modal from '@components/organisms/Modal'

const mockName = 'MOCK NAME'
const mockId = 'MOCK ID'

describe('sendTodo modal config', () => {
  test('should call the sendTodo callback with id when action button clicked', () => {
    const callback = jest.fn()
    const wrapper = shallow(
      <Modal
        isOpen
        config={sendTodo(mockName, callback, mockId)}
        closeModal={() => {}}
      />,
    )
    const actionButton = wrapper.findWhere(e =>
      e.type() === Button && e.prop('primary'),
    )
    actionButton.simulate('click')
    expect(callback).toBeCalledWith(mockId)
  })

  test('should have the content we expect', () => {
    const wrapper = mount(
      <Modal
        isOpen
        config={sendTodo(mockName, () => {}, mockId)}
        closeModal={() => {}}
      />,
    )
    const keyedContent = wrapper.find(SemanticModal.Content).children().children().map((e, i) =>
      cloneElement(e.getElement(), { key: i }),
    )
    const tree = renderer.create(
      <Fragment>
        {keyedContent}
      </Fragment>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
    wrapper.unmount()
  })
})
