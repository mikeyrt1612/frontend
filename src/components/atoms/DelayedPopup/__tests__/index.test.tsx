import React from 'react'
import { mount } from 'enzyme'

import DelayedPopup from '../'

// https://git.io/fx2MK
const semanticPopupHoverDelay = 50
const semanticVisiblePopupClasses = '.ui.popup.visible'

describe('<DelayedPopup />', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  describe('default delay', () => {
    test('should be visible after mouseover and default delay', () => {
      const wrapper = mount(
        <DelayedPopup
          content="MOCK"
          trigger={<button id="trigger">MOCK</button>}
        />,
      )
      wrapper.find('#trigger').simulate('mouseenter')
      jest.advanceTimersByTime(semanticPopupHoverDelay)
      jest.advanceTimersByTime(DelayedPopup.defaultProps.delay - 1)
      expect(document.body.querySelector(semanticVisiblePopupClasses)).toBeNull()
      jest.advanceTimersByTime(1)
      expect(document.body.querySelector(semanticVisiblePopupClasses)).not.toBeNull()
      wrapper.unmount()
    })
  })

  describe('specific delay', () => {
    test('should be visible after mouseover and specified delay has elapsed', () => {
      const delay = 1000
      const wrapper = mount(
        <DelayedPopup
          delay={delay}
          content="MOCK"
          trigger={<button id="trigger">MOCK</button>}
        />,
      )
      wrapper.find('#trigger').simulate('mouseenter')
      jest.advanceTimersByTime(semanticPopupHoverDelay)
      jest.advanceTimersByTime(delay - 1)
      expect(document.body.querySelector(semanticVisiblePopupClasses)).toBeNull()
      jest.advanceTimersByTime(1)
      expect(document.body.querySelector(semanticVisiblePopupClasses)).not.toBeNull()
      wrapper.unmount()
    })
  })

  describe('should cancel the popup if trigger clicked before delay ends', () => {
    test('should be visible after mouseover and default delay', () => {
      const wrapper = mount(
        <DelayedPopup
          content="MOCK"
          trigger={<button id="trigger">MOCK</button>}
        />,
      )
      wrapper.find('#trigger').simulate('mouseenter')
      jest.advanceTimersByTime(semanticPopupHoverDelay)
      jest.advanceTimersByTime(DelayedPopup.defaultProps.delay - 1)
      expect(document.body.querySelector(semanticVisiblePopupClasses)).toBeNull()

      wrapper.find('#trigger').simulate('click')

      jest.advanceTimersByTime(1)
      expect(document.body.querySelector(semanticVisiblePopupClasses)).toBeNull()
      wrapper.unmount()
    })
  })
})
