import { configure } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

const req = require.context('..', true, /story\.tsx?$/)

const loadStories = () => {
  req.keys().forEach(req)
}

configure(loadStories, module);
