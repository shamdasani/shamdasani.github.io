import React, { Component } from 'react'
import styled from 'styled-components'
import Tilt from 'react-tilt'
import { Row, Col } from 'react-grid-system'

const Card = styled.div.attrs({
  background: props => props.color
})`
  border-radius: 10px;
  height: 300px;
  margin: 1rem;
  background: ${props => props.color};
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 2em;
`

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
`

const Project = styled.div.attrs({
  color: props => props.color
})`
  color: ${props => props.color};
  padding: 5%;
`

const Work = () => (
  <div>
    <Row>
      <Col sm={6}>
        <Tilt options={{ max: 20 }}>
          <a href="https://enlight.ml">
            <Card color="linear-gradient(to right, #ff5f6d, #ffc371)">
              <Project color="#4a4a4a">
                <Title>Enlight</Title>
                <Subtitle>Learn to code by building projects</Subtitle>
              </Project>
            </Card>
          </a>
        </Tilt>{' '}
      </Col>
      <Col sm={6}>
        <Tilt options={{ max: 20 }}>
          <a href="https://github.com/blinkcare/blink">
            <Card color="linear-gradient(to right, #000046, #1cb5e0);">
              <Project color="#E2E2E2">
                <Title>Blink</Title>
                <Subtitle>
                  Affordable and accurate communication for locked-in patients
                </Subtitle>
              </Project>
            </Card>
          </a>
        </Tilt>{' '}
      </Col>
    </Row>

    <Row>
      <Col sm={6}>
        <Tilt options={{ max: 20 }}>
          <a href="https://wiki.shamdasani.org">
            <Card color="linear-gradient(to right, #00b09b, #96c93d)">
              <Project color="#fcfcbb">
                <Title>Wiki</Title>
                <Subtitle>Wikipedia viewer fitted to my visual taste</Subtitle>
              </Project>
            </Card>
          </a>
        </Tilt>
      </Col>
      <Col sm={6}>
        <Tilt options={{ max: 20 }}>
          <a href="https://shamdasani.org/color">
            <Card color="linear-gradient(to right, #ee9ca7, #ffdde1)">
              <Project color="#4a4a4a">
                <Title>Color</Title>
                <Subtitle>Simple color contrast generator</Subtitle>
              </Project>
            </Card>
          </a>
        </Tilt>
      </Col>
    </Row>
  </div>
)

export default Work
