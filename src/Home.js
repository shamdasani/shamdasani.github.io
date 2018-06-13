import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Me from './Me'
import Welcome from './Welcome'

injectGlobal`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Helvetica Neue', 'Arial', sans-serif;

}
a {
  text-decoration: none;
}
`

const Fullscreen = styled.div`
  height: ${props => props.h};
  background: ${props => props.gradient};
  z-index: 0;
`

const Home = () => (
  <main>
    <Welcome
      c="linear-gradient(to right, #232526, #414345);"
      title="Samay Shamdasani"
    />
    <Fullscreen
      gradient="linear-gradient(to right, #ece9e6, #ffffff)"
      h="500vh"
    >
      <Me />
    </Fullscreen>
  </main>
)

export default Home
