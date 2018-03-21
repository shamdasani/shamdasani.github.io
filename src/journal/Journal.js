import React, { Component } from 'react'
import Subtitle from '../utils/Subtitle'
import styled from 'styled-components'
import Welcome from '../Welcome'
import { Link } from 'react-router-dom'
import DocumentTitle from '../utils/DocumentTitle'

import Container from '../post-elements/Container'
import Back from '../post-elements/Back'
import Date from '../post-elements/Date'
import ViewCounter from '../post-elements/ViewCounter'
import PostData from '../post-elements/PostData'

const Journal = () => (
  <div>
    <Back>
      <Link to="/#writing">&#8592;</Link>
    </Back>
    <DocumentTitle title="Journal of Samay Shamdasani" />
    <Welcome
      c="linear-gradient(to right, #232526, #414345);"
      title="Journal of Samay Shamdasani"
    />
    <PostData>
      <Date>11/10/17</Date>
      <ViewCounter id="journal" />
    </PostData>

    <Container>
      <h1>Life is short, as everyone knows.</h1>
    </Container>
  </div>
)
export default Journal
