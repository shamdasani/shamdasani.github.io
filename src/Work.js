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
  padding: 5%;
`

function Project(props) {
  return (
    <Tilt options={{ max: 10 }}>
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
      g="linear-gradient(to right, #232526, #414345);"
      name="Featured Work"
    />
    <Row>
      <Col sm={3}>
        <Project
          className="project"
          url="https://enlight.nyc"
          bg="#2196f3"
          color="#fff;"
          title="Enlight"
          description="Learn to code by building projects"
        />
      </Col>
      <Col sm={3}>
        <Project
          url="https://github.com/blinkcare/blink"
          bg="#16222a"
          color="#fff"
          title="Blink"
          description="Affordable and accurate communication for locked-in patients"
        />
      </Col>
      <Col sm={3}>
        <Project
          url="https://makespp.com"
          bg="#e91e63"
          color="#fff"
          title="MakeSPP"
          description="High school hackathon bringing together 100+ future entrepreuners and engineers"
        />
      </Col>

      <Col sm={3}>
        <Project
          url="https://github.com/shamdasani/peters"
          bg="#f44336"
          color="#fff"
          title="Peters"
          description="Cross-platform app for Saint Peter's Prep students built with React Native"
        />
      </Col>
    </Row>

    <Row>
      <Col sm={3}>
        <Project
          url="https://shamdasani.org/WeatherPi"
          bg="#ec6f66"
          color="#4a4a4a"
          title="WeatherPi"
          description="Temperature and humidity vizualization of my room"
        />
      </Col>
      <Col sm={3}>
        <Project
          url="https://wiki.shamdasani.org"
          bg="#00bcd4"
          color="#fff;"
          title="Wiki"
          description="Wikipedia viewer fitted to my visual taste"
        />
      </Col>
      <Col sm={3}>
        <Project
          url="https://shamdasani.org/color"
          bg="#009688"
          color="#fff;"
          title="Color"
          description="Simple color contrast generator"
        />
      </Col>
      <Col sm={3}>
        <Project
          url="https://github.com/shamdasani/SwiftFrameworks"
          bg="#ffc107"
          color="#fff;"
          title="Swift Frameworks"
          description="Accepted WWDC18 Scholarship Playground Submission"
        />
      </Col>
    </Row>
  </div>
)

export default Work
