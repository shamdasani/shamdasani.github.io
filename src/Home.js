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
  position: absolute;

  @media (max-width: 700px) {
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`

const Overlay = styled.div`
  padding-top: 10vh;
  padding-left: 5%;
  @media (max-width: 700px) {
    padding-left: 0;
    padding-top: 0;
  }
`

const Welcome = styled.div`
  height: ${props => props.h};
  background: ${props => props.gradient};
  z-index: 0;
  @media screen and (max-width: 700px) {
    height: 100vh;
  }
`

const Fullscreen = styled.div`
  height: ${props => props.h};
  background: ${props => props.gradient};
  z-index: 0;
`

const Home = () => (
  <main>
    <Welcome gradient="linear-gradient(to right, #56ccf2, #2f80ed);" h="40vh">
      <Particles />
      <Overlay>
        <Title>Samay Shamdasani</Title>
      </Overlay>
    </Welcome>
    <Fullscreen
      gradient="linear-gradient(to right, #ece9e6, #ffffff)"
      h="400vh"
    >
      <Me />
    </Fullscreen>
  </main>
)

export default Home
