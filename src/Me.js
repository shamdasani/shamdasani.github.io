import React, { Component } from 'react'
import styled from 'styled-components'
import Work from './Work'
import Writing from './Writing'

const Container = styled.div`padding: 5%;`

const Hey = styled.h1`
  margin: 0;
  font-size: 3rem;
`
const Button = styled.a`
  margin: 5px;
  margin-bottom: 2%;
  font-size: 1rem;
  color: white;
  padding: 1em;
  background: ${props => props.bg};
  border-radius: 5px;
  border: none;
  display: inline-block;

  &:hover {
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: #000;
  border-bottom: 10px solid #ff512f;

  &:hover {
    background: linear-gradient(to left, #ff512f, #dd2476);
    border-bottom: none;
    color: #fff;
  }
`

const Subtitle = styled.h3`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 600;
`

const Me = () => (
  <div id="me">
    <Container>
      <Hey>
        I&#39;m an always-learning developer based in the Greater New York City
        area.
      </Hey>
      <Subtitle>
        I also <Link href="#writing">write</Link>,{' '}
        <Link href="https://shamdasani.org/training">run</Link>, and take{' '}
        <Link href="https://shamdasani.org/photos">photos</Link>.
      </Subtitle>
      <Button
        bg="linear-gradient(to right, #56ccf2, #2f80ed)"
        href="https://twitter.com/shamdasanii"
      >
        Twitter
      </Button>

      <Button
        bg="linear-gradient(to right, #16222a, #3a6073)"
        href="https://instagram.com/shamdasanii"
      >
        Instagram
      </Button>

      <Button
        bg="linear-gradient(to right, #ffb75e, #ed8f03)"
        href="https://github.com/shamdasani"
      >
        GitHub
      </Button>
      <Button
        bg="linear-gradient(to right, #ff512f, #dd2476)"
        href="mailto:techboss302@gmail.com"
      >
        techboss302@gmail.com
      </Button>
    </Container>
    <Work />
    <Writing />
  </div>
)

export default Me
