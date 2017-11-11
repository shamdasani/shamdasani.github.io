import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Particles from './Particles'

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

const Background = styled.div`
  height: ${props => props.h};
  background: ${props => props.gradient};
  z-index: 0;
  @media screen and (max-width: 700px) {
    height: ${props => props.mobile};
  }
`

const Welcome = ({ title, c }) => (
  <Background
    gradient="linear-gradient(to right, #56ccf2, #2f80ed);"
    mobile="100vh"
    h="40vh"
  >
    <Particles />
    <Overlay>
      <Title>{title}</Title>
    </Overlay>
  </Background>
)

export default Welcome
