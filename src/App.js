import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Particles from './Particles'
import Me from './Me'

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
const Title = styled.h1`
  font-weight: 600;
  font-size: 4rem;
  text-align: center;
  user-select: none;
  color: #fff;
`

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const Fullscreen = styled.div.attrs({
  background: props => props.gradient,
  height: props => props.h
})`
  height: ${props => props.h};
  left: 0;
  top: 0;
  background: ${props => props.gradient};
  z-index: 0;
`

const App = () => (
  <main>
    <Fullscreen
      gradient="linear-gradient(to right, #485563, #29323c)"
      h="100vh"
    >
      <Particles />

      <Overlay>
        <Title>Samay Shamdasani</Title>
      </Overlay>
      <a href="#me">
        <img src="https://icon.now.sh/chevron/down/32/fff" />
      </a>
      <style>
        {`
      @keyframes bounce {
        from {
          transform: translateY(0px);
        }
        to {
          transform: translateY(-15px);
          }
        }
      @-webkit-keyframes bounce {
        from {
          transform: translateY(0px);
          }
        to {
          transform: translateY(-15px);
          }
        }
      img {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        user-select: none;
        left: 0;
        right: 0;
        z-index: 2;
        bottom: 0;
        margin-bottom: 1em;
        animation: bounce 1s infinite alternate;
        }
      `}
      </style>
    </Fullscreen>
    <Fullscreen
      gradient="linear-gradient(to right, #ece9e6, #ffffff)"
      h="400vh"
    >
      <Me />
    </Fullscreen>
  </main>
)

export default App

// BLOG: https://blog.cortes.us/
// Fix html with meta tags and such, build fo rproduciton
// photos page, training page REACT
