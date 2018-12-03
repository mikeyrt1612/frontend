import React from 'react'
import { StoryDecorator, RenderFunction } from '@storybook/react'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import configureStore from '@store/configureStore'

const history = createHistory()
const store: Store = configureStore(history)

const storeDecorator: StoryDecorator = (story: RenderFunction) => (
  <Provider store={store}>
    {story()}
  </Provider>
)

export default storeDecorator
