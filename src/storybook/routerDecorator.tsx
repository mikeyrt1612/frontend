import React from 'react'
import { StoryDecorator, RenderFunction } from '@storybook/react'
import createHistory from 'history/createBrowserHistory'
import { Router } from 'react-router'

const history = createHistory()

const storeDecorator: StoryDecorator = (story: RenderFunction) => (
  <Router history={history}>
    {story()}
  </Router>
)

export default storeDecorator
