import { createStore, applyMiddleware } from 'redux'
import { middleware } from './middleware'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { rootReducer } from './reducers'

export const forgeStore = (preloadedState = {}) => {
  const middlewareEnhancer = applyMiddleware(...middleware)
  const storeEnhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...storeEnhancers)

  return createStore(rootReducer, preloadedState, composedEnhancers)
}
