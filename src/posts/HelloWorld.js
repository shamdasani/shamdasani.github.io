import React, { Component } from 'react'
import Subtitle from '../utils/Subtitle'
import styled from 'styled-components'
import Welcome from '../Welcome'
import DocumentTitle from '../utils/DocumentTitle'

import { Link } from 'react-router-dom'

import Container from '../post-elements/Container'
import Back from '../post-elements/Back'
import Date from '../post-elements/Date'
import ViewCounter from '../post-elements/ViewCounter'
import PostData from '../post-elements/PostData'

const HelloWorld = () => (
  <div>
    <Back>
      <Link to="/#writing">&#8592;</Link>
    </Back>
    <DocumentTitle title="Hello World" />
    <Welcome title="Hello World" />
    <PostData>
      <Date>10/04/17</Date>
      <ViewCounter id="hello-world" />
    </PostData>

    <Container>
      <p>
        Hey there! I’m <strong> Samay</strong>. Welcome to my very first post!
      </p>
      <p>
        Of my infinite thoughts, some are worth sharing. This journal will be
        based on business, tech, and life.
      </p>
      <h2>About me</h2>
      <p>
        I’m a 16 year old developer based in New Jersey, USA. Of all things, I
        absolutely love technology. I’m definitely more of a front-end
        developer, but I’ve been experimenting with lower level stuff recently
        such as machine learning algorithms in Python.
      </p>
      <p>
        I also <a href="https://shamdasani.org/training">run</a> nearly
        everyday. You could probably find me exploring our planet, appreciating
        the breathtaking beauty that nature has bestowed on us.
      </p>
      <p>
        Please feel free to contact me anytime. I love meeting new people and
        I’m always open for new opportunities:{' '}
        <a href="mailto:hi@shamdasani.org">hi@shamdasani.org</a>
      </p>
    </Container>
  </div>
)
export default HelloWorld
