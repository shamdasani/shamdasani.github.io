import React, { Component } from 'react'
import styled from 'styled-components'
import Tilt from 'react-tilt'
import { Row, Col } from 'react-grid-system'
import Subtitle from './utils/Subtitle'

const Card = styled.div`
  border-radius: 10px;
  height: 300px;
  margin: 1rem;
  background: ${props => props.bg};
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 2em;
  color: ${props => props.color};
  padding-left: 5%;
  padding-top: 5%;
`

const Description = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${props => props.color};
  padding-left: 5%;
`

function Project(props) {
  return (
    <Tilt options={{ max: 20 }}>
      <a href={props.url}>
        <Card bg={props.bg}>
          <Title color={props.color}>{props.title}</Title>
          <Description color={props.color}>{props.description}</Description>
        </Card>
      </a>
    </Tilt>
  )
}

const Work = () => (
  <div>
    <Subtitle
      g="linear-gradient(to right, #56ccf2, #2f80ed);"
      name="Featured Work"
    />
    <Row>
      <Col sm={6}>
        <Project
          className="project"
          url="https://tryenlight.github.io"
          bg="linear-gradient(to right, #ff5f6d, #ffc371)"
          color="#4a4a4a;"
          title="Enlight"
          description="Learn to code by building projects"
        />
      </Col>
      <Col sm={6}>
        <Project
          url="https://github.com/blinkcare/blink"
          bg="linear-gradient(to right, #000046, #1cb5e0);"
          color="#E2E2E2"
          title="Blink"
          description="Affordable and accurate communication for locked-in patients"
        />
      </Col>
    </Row>

    <Row>
      <Col sm={6}>
        <Project
          url="https://wiki.shamdasani.org"
          bg="linear-gradient(to right, #00b09b, #96c93d)"
          color="#fcfcbb;"
          title="Wiki"
          description="Wikipedia viewer fitted to my visual taste"
        />
      </Col>
      <Col sm={6}>
        <Project
          url="https://shamdasani.org/color"
          bg="linear-gradient(to right, #ee9ca7, #ffdde1)"
          color="#4a4a4a;"
          title="Color"
          description="Simple color contrast generator"
        />
      </Col>
    </Row>
  </div>
)

export default Work
