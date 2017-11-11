import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App'
import Home from './Home'
import HelloWorld from './posts/HelloWorld'
import BiggerThings from './posts/BiggerThings'
import Life from './posts/Life'

render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/hello-world" component={HelloWorld} />
      <Route path="/bigger-things" component={BiggerThings} />
      <Route path="/life" component={Life} />
    </div>
  </BrowserRouter>,
  app
)
