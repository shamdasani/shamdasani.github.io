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

const Crypto2018 = () => (
  <div>
    <Back>
      <Link to="/#writing">&#8592;</Link>
    </Back>
    <DocumentTitle title="2018: Where every day is spent getting excited over a new cryptocurrency" />
    <Welcome title="2018: Where every day is spent getting excited over a new cryptocurrency" />
    <PostData>
      <Date>01/03/18</Date>
      <ViewCounter id="crypto" />
    </PostData>

    <Container>
      <p>
        I am, by no means, a financial expert. I do not even thing I have
        invested in anything before. However, there’s this new thing called
        digital currency, which you probably have heard about.{' '}
      </p>
      <p>
        Cryptocurrency is crazy. I’ve been following the markets (roughly),
        getting my mind around the thousands of different coins and I always
        can’t help to ask myself how people can invest in a value stored on a
        ledger. Well, upon further thought, I guess the only difference between
        digital and physical currency is that physical (fiat) money is something
        tangible. After all, they both get their value from our trust.{' '}
      </p>
      <p>
        Today actually marks{' '}
        <a href="https://en.bitcoin.it/wiki/Genesis_block">
          Bitcoin’s ninth birthday
        </a>. It’s pretty cool that it took only nine years to turn one
        worthless little block to almost 17 million digital coins worth $15,000+
        as of today. This is proof that nothing is impossible.{' '}
      </p>
      <p>
        The reason I’m writing this post is because there’s a lot on my mind
        when it comes to digital currency. I’ve always thought that currency
        should be used to buy things, not to be invested in. This whole space
        has completely changed my personal perception on economics in general.
        It looks like you really can invest in anything.{' '}
      </p>
      <p>
        Of course, I would love to make some extra money. I want money, who
        doesn’t? But, there has to be a point where I start to think if this is
        real - if this bull market can keep on going. Everyone cannot win. There
        is only so much money in the world.{' '}
      </p>
      <p>
        {' '}
        Actually, I may be suffering from{' '}
        <a href="https://en.wikipedia.org/wiki/Fear_of_missing_out">FOMO</a>. A
        sophomore who’s a year younger than me told me about his investments in
        crypto. You couldn’t imagine my reaction when he told me he’s profited
        more than $30k this year. That is just wild. Even more, my computer
        science teacher just told me he wants to start a crypto hedge fund.
        That’s when you know he’s has some serious profits.{' '}
      </p>
      <p>
        Is it really that easy to make money? After hearing the success of
        others, another friend of mine decided to drop $900 on Ripple today. I
        estimate that about 2/5 of my closest friends and family have had a
        discussion of cryptocurrency in general and have invested in it.{' '}
      </p>
      <p>
        Therefore, my friends, I think I’ll be dropping a couple hundred tonight
        to take a chance. Let’s see what happens :){' '}
      </p>
    </Container>
  </div>
)
export default Crypto2018
