import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Scroll from './Scroll'

import App from './App'
import Home from './Home'

import HelloWorld from './posts/HelloWorld'
import BiggerThings from './posts/BiggerThings'
import Life from './posts/Life'

render(
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <Scroll>
      <Route exact path="/" component={Home} />
      <Route path="/hello-world" component={HelloWorld} />
      <Route path="/bigger-things" component={BiggerThings} />
      <Route path="/life" component={Life} />
    </Scroll>
  </BrowserRouter>,
  app
)
