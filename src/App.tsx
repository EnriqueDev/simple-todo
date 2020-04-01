import * as React from 'react'
import { forgeStore } from './store/store'
import { Provider } from 'react-redux'
import Router from './router/router'

const store = forgeStore()

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
