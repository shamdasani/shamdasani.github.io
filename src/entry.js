import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App'
import Home from './Home'
import HelloWorld from './posts/HelloWorld'

render(
  <BrowserRouter routes={routes}>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/hello-world" component={HelloWorld} />
    </div>
  </BrowserRouter>,
  app
)
