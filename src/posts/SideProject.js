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

const HelloWorld = () => (
  <div>
    <Back>
      <Link to="/#writing">&#8592;</Link>
    </Back>
    <Welcome title="My side project" />
    <DocumentTitle title="My side project" />

    <PostData>
      <Date>10/13/17</Date>
      <ViewCounter id="side-project" />
    </PostData>

    <Container>
      <p>
        About a little over a year ago, I started{' '}
        <a href="https://tryenlight.github.io">Enlight</a>, a mini-project to
        teach people to code by building projects. To my surprise, it ended up
        doing fairly well. Enlight made the front-page of{' '}
        <a href="https://news.ycombinator.com/item?id=12945516">Hacker News</a>,
        got over 900 upvotes on{' '}
        <a href="https://www.producthunt.com/posts/enlight-3">Product Hunt</a>,
        and was posted on many subreddits. Enlight is also very close to 1,000
        email subscribers. I think the most-mind blowing moment for me was when
        there were more than 100 users simultaneously on the site. The same day
        as Enlight was featured on HN, Jeff Atwood, the co-founder of Stack
        Overflow,{' '}
        <a href="https://twitter.com/codinghorror/status/798040770552807425">
          tweeted it out
        </a>.
      </p>
      <p>
        However, balancing schoolwork and other sideprojects as a high-school
        student and varsity athlete proved to be extremely challenging. Although
        Enlight grew, it had not grown at the pace I thought it would have.
      </p>
      <p>
        Recently, my "free" domain provider, Freenom, decided to take away{' '}
        <a href="https://enlight.ml">enlight.ml</a>. As they can legally do this
        (I did not purchase the .ml domain), I take full responsibility. I
        should have purchased an actual domain. Since Wednesday, October 11th,
        no one was able to reach Enlight via enlight.ml. Thus, I lost the domain
        all my users were familiar with. It truly is heartbreaking to see
        everything that you've worked for be unable to be accessed by the world.
        I've learnt my lesson - the hard way.
      </p>
      <p>I'm currently working on taking Enlight to a whole new level.</p>
      <p>
        For now, Enlight can be reached at{' '}
        <a href="https://tryenlight.github.io">tryenlight.github.io</a>.
      </p>
    </Container>
  </div>
)
export default HelloWorld
