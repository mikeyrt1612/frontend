import React from 'react'
import { shallow, mount } from 'enzyme'
import { Button, Header, Modal as SemanticModal } from 'semantic-ui-react'

import Modal from '../'
import { IModalConfig } from '@store/modal/model'

const closeModal = jest.fn()
const callback = jest.fn()
const basicConfig: IModalConfig = {
  header: {
    icon: 'bowling ball',
    label: 'MOCK LABEL',
  },
  content: 'MOCK CONTENT',
  action: {
    label: 'MOCK ACTION',
    callback,
  },
}

const getBasicModal = () =>
  <Modal
    isOpen
    config={basicConfig}
    closeModal={closeModal}
  />

describe('<Modal />', () => {
  test('should be visible when isOpen prop is true', () => {
    const wrapper = shallow(getBasicModal())
    expect(wrapper.find(SemanticModal)).toHaveProp('open', true)
  })

  describe('header', () => {
    test('should display the correct icon', () => {
      const wrapper = shallow(getBasicModal())
      expect(wrapper.find(Header)).toHaveProp('icon', basicConfig.header.icon)
    })

    test('should display the correct label', () => {
      const wrapper = shallow(getBasicModal())
      expect(wrapper.find(Header)).toHaveProp('content', basicConfig.header.label)
    })
  })

  describe('content', () => {
    test('should render a string', () => {
      const wrapper = mount(getBasicModal())
      expect(wrapper.find(SemanticModal.Content)).toHaveText(basicConfig.content as string)
      wrapper.unmount()
    })

    test('should render a ReactNode', () => {
      const wrapper = mount(
        <Modal
          isOpen
          config={{
            ...basicConfig,
            content: (
              <div>
                <div id="MOCK_CONTENT" />
              </div>
            ),
          }}
          closeModal={closeModal}
        />,
      )
      expect(wrapper.find('#MOCK_CONTENT')).toExist()
      wrapper.unmount()
    })

    test('should render a ReactNode when an IUpdateCallback is used', () => {
      const wrapper = mount(
        <Modal
          isOpen
          config={{
            ...basicConfig,
            content: update => (
              <div>
                <div id="MOCK_CONTENT" />
              </div>
            ),
          }}
          closeModal={closeModal}
        />,
      )
      expect(wrapper.find('#MOCK_CONTENT')).toExist()
      wrapper.unmount()
    })
  })

  describe('action', () => {
    test('should display the correct label', () => {
      const wrapper = shallow(getBasicModal())
      const actionButton = wrapper.find(SemanticModal.Actions).findWhere(e =>
        e.type() === Button && e.props().primary,
      )
      expect(actionButton).toHaveProp('content', basicConfig.action.label)
    })

    test('should execute callback when action button is pressed', () => {
      const wrapper = shallow(getBasicModal())
      const actionButton = wrapper.find(SemanticModal.Actions).findWhere(e =>
        e.type() === Button && e.props().primary,
      )
      callback.mockClear()
      actionButton.simulate('click')
      expect(callback).toHaveBeenCalled()
    })

    test('should pass data to callback when content is IUpdateCallback', () => {
      const wrapper = mount(
        <Modal
          isOpen
          config={{
            ...basicConfig,
            content: update => (
              <div>
                <div id="MOCK_CONTENT" onClick={() => { update({ test: 'MOCK DATA' }) }} />
              </div>
            ),
          }}
          closeModal={closeModal}
        />,
      )
      wrapper.find('#MOCK_CONTENT').simulate('click')

      const actionButton = wrapper.find(SemanticModal.Actions).findWhere(e =>
        e.type() === Button && e.props().primary,
      )
      callback.mockClear()
      actionButton.simulate('click')
      expect(callback).toHaveBeenCalledWith({ test: 'MOCK DATA' })
      wrapper.unmount()
    })

    test('should disable action button when set with the disabled prop', () => {
      const wrapper = shallow(
        <Modal
          isOpen
          config={{
            ...basicConfig,
            action: {
              ...basicConfig.action,
              disabled: true,
            },
          }}
          closeModal={closeModal}
        />,
      )
      const actionButton = wrapper.find(SemanticModal.Actions).findWhere(e =>
        e.type() === Button && e.props().primary,
      )
      expect(actionButton).toHaveProp('disabled', true)
    })

    test('should disabled action button with data callback when content is IUpdateCallback', () => {
      const wrapper = mount(
        <Modal
          isOpen
          config={{
            ...basicConfig,
            content: update => (
              <div>
                <div id="MOCK_CONTENT" onClick={() => { update({ test: 'MOCK DATA' }) }} />
              </div>
            ),
            action: {
              ...basicConfig.action,
              disabled: (({ test }) => test === 'MOCK DATA'),
            },
          }}
          closeModal={closeModal}
        />,
      )

      let actionButton = wrapper.find(SemanticModal.Actions).findWhere(e =>
        e.type() === Button && e.props().primary,
      )
      expect(actionButton).toHaveProp('disabled', false)

      wrapper.find('#MOCK_CONTENT').simulate('click')

      actionButton = wrapper.find(SemanticModal.Actions).findWhere(e =>
        e.type() === Button && e.props().primary,
      )
      expect(actionButton).toHaveProp('disabled', true)

      wrapper.unmount()
    })
  })

  describe('closing modal', () => {
    test('should close when cancel button clicked', () => {
      const wrapper = shallow(getBasicModal())
      const cancelButton = wrapper.find(SemanticModal.Actions).findWhere(e =>
        e.type() === Button && e.props().content === 'Cancel',
      )
      closeModal.mockClear()
      cancelButton.simulate('click')
      expect(closeModal).toHaveBeenCalled()
    })

    test('should close when the modal dimmer is clicked', () => {
      const wrapper = shallow(getBasicModal())
      expect(wrapper.find(SemanticModal)).toHaveProp('closeOnDimmerClick')
    })
  })
})
