import * as React from 'react'
import { Router as ReactRouter, Switch, Route } from 'react-router-dom'
import Home from '../modules/Home/Home'
import { browserHistory } from './history'

const Router: React.FC = () => {
  return (
    <ReactRouter history={browserHistory}>
      <Switch>
        <Route path={'/'} component={Home} />
      </Switch>
    </ReactRouter>
  )
}

export default Router
