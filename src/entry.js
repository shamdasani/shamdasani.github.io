import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Scroll from './Scroll'

import App from './App'
import Home from './Home'

import SpanishProject from './misc/SpanishProject'

import HelloWorld from './posts/HelloWorld'
import SideProject from './posts/SideProject'
import Life from './posts/Life'

render(
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <Scroll>
      <Route exact path="/" component={Home} />
      <Route path="/hello-world" component={HelloWorld} />
      <Route path="/side-project" component={SideProject} />
      <Route path="/life" component={Life} />
      <Route path="/portafolio" component={SpanishProject} />
    </Scroll>
  </BrowserRouter>,
  app
)
