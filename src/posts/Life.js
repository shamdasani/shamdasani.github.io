import React, { Component } from 'react'
import Subtitle from '../utils/Subtitle'
import styled from 'styled-components'
import Welcome from '../Welcome'
import { Link } from 'react-router-dom'

import Container from '../post-elements/Container'
import Back from '../post-elements/Back'
import Date from '../post-elements/Date'

const HelloWorld = () => (
  <div>
    <Back>
      <a href="https://shamdasani.org/#writing">&#8592;</a>
    </Back>
    <Welcome title="Learning to Live" />
    <Date>11/10/17</Date>
    <Container>
      <h1>Life is short, as everyone knows.</h1>
      <p>
        Yes, I know I’m only a 16 year old Junior in high school. However, in
        reality, my years on Earth are only decreasing, one second at a time.
        When I look back on the past, I wish some moments could remain in the
        present. However, I often end up forgetting those moments that really
        matter. Moments like the time when I went on a 8.34 mile run in Tuscany,
        chasing an ancient castle in the distance. I remember the evergreen
        Tuscan cypress trees surrounding me on the winding dirt road, and I
        remember so vividly the taste of a grape I tasted off a fresh vine. I
        want to remember these moments forever.
      </p>
      <p>
        With that being said, I’ve been trying to decode my life, more
        specifically, my purpose. No, I don’t want to be doing service all my
        life, nor do I want to do something humanitarian-oriented that is
        typically said to give one “purpose”. I want to be happy, and to me, I
        think there’s a couple things that lead me to that.
      </p>
      <p>
        I mean, I am happy. But, there’s just so much more that I want. I guess
        that’s how God created us:{' '}
        <strong>beings whose desires never end.</strong>
      </p>
      <p>
        I’d like to talk about wealth. Yes, people say money doesn’t buy
        happiness, and even though I don’t know that for sure, I still want a
        good amount of it. I’m being completely honest. I want a beach house, an
        apartment in the city, and a little lodge up on a mountain where I can
        escape. I’d also love a Tesla Model S and probably all the latest
        high-tech innovations of the time, but I don’t understand how having
        these desires are bad. I know that my desires are all material objects,
        and that the motives behind possessing these items are based on personal
        gain, but life is short. Why not enjoy it?
      </p>
      <p>
        An intellectual may respond that I haven’t discovered the true meaning
        of my life. Well, I’m okay with that. I’ll definitely make sure to post
        another essay whenever I have that realization. For now though, I’m
        going to work as hard as I can to achieve the things that I want from my
        life, no matter how self-centered or “material” they might sound.
      </p>
      <p>
        Well, of course, I also need other things like a fun group of friends
        and interesting work to keep me busy. My point is that all these things,
        when put together, truly make me happy.
      </p>
      <p>
        Therefore, live life to your fullest. Be fun, be crazy, and be smart.
        Make the most out of every single day by doing what matters.
      </p>
    </Container>
  </div>
)
export default HelloWorld
