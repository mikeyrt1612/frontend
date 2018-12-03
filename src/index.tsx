import React from 'react'
import { Store } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import 'semantic-ui-less/semantic.less'

import App from './components/App'
import configureStore from '@store/configureStore'
import '@services/api'

const history = createHistory()
const store: Store = configureStore(history)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
