import React, { Component } from 'react'
import styled from 'styled-components'
import Work from './Work'

const Container = styled.div`padding: 5%;`

const Hey = styled.h1`
  margin: 0;
  font-size: 3rem;
`
const Button = styled.button.attrs({
  background: props => props.bg
})`
  margin: 5px;
  font-size: 1rem;
  color: white;
  padding: 1em;
  background: ${props => props.bg};
  border-radius: 5px;
  border: none;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
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

const Social = styled.div``

const Me = () => (
  <div id="me">
    <Container>
      <Hey>I'm an always-learning developer based in New Jersey, USA.</Hey>
      <Subtitle>
        I also <Link href="https://blog.shamdasani.org">write</Link>,{' '}
        <Link href="https://shamdasani.org/training">run</Link>, and take{' '}
        <Link href="https://photos.shamdasani.org">photos</Link>.
      </Subtitle>
      <Social>
        <a href="https://twitter.com/shamdasanii">
          <Button bg="linear-gradient(to right, #56ccf2, #2f80ed)">
            Twitter
          </Button>
        </a>
        <a href="https://instagram.com/shamdasanii">
          <Button bg="linear-gradient(to right, #16222a, #3a6073)">
            Instagram
          </Button>
        </a>
        <a href="https://github.com/shamdasani">
          <Button bg="linear-gradient(to right, #ffb75e, #ed8f03)">
            GitHub
          </Button>
        </a>
      </Social>
      <a href="mailto:hi@shamdasani.org">
        <Button bg="linear-gradient(to right, #ff512f, #dd2476)">
          hi@shamdasani.org
        </Button>
      </a>
      <Subtitle>Featured Work</Subtitle>
      <Work />
      <Subtitle>Latest Writing</Subtitle>
    </Container>
  </div>
)

export default Me
