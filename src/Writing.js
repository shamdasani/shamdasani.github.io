import React, { Component } from 'react'
import Subtitle from './utils/Subtitle'
import Tilt from 'react-tilt'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`padding: 5%;`

const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  color: #000;
  display: inline-block;
  &:hover {
    background: linear-gradient(to right, #56ccf2, #2f80ed);
    color: #fff;
  }
`

function Post(props) {
  return (
    <Link to={props.url}>
      <div>
        <Title color={props.color}>{props.title}</Title>
      </div>
    </Link>
  )
}

const Writing = () => (
  <div id="writing">
    <Subtitle g="linear-gradient(to right, #56ccf2, #2f80ed);" name="Writing" />
    <Container>
      <Post url="/life" title="Learning to Live" />
      <Post url="/side-project" title="My side project" />
      <Post url="/hello-world" title="Hello World" />
    </Container>
  </div>
)
export default Writing
