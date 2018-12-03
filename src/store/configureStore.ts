import { createStore, applyMiddleware, combineReducers, Store, Middleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { History } from 'history'

import reducers from '@store/reducers'
import sagas from '@store/sagas'

type IConfigureStore = (history: History) => Store

const configureStore: IConfigureStore = (history: History): Store => {
  const middleware: Array<Middleware> = []
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  middleware.push(routerMiddleware(history))

  const store: Store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    composeWithDevTools(applyMiddleware(...middleware)),
  )
  sagaMiddleware.run(sagas)
  return store
}

export default configureStore
