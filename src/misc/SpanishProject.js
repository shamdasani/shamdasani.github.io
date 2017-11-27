import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Welcome from '../Welcome'

import Subtitle from '../utils/Subtitle'
import DocumentTitle from '../utils/DocumentTitle'

import Back from '../post-elements/Back'
import Date from '../post-elements/Date'
import ViewCounter from '../post-elements/ViewCounter'
import PostData from '../post-elements/PostData'

import { Row, Col } from 'react-grid-system'

const Container = styled.div`
  margin: 2%;
  font-size: 1.3em;

  a {
    color: #2f80ed;
    border-bottom: 1px solid #d3d3d3;
    transition: all 300ms ease;
  }

  a:hover {
    opacity: 0.4;
  }

  img,
  p {
    display: inline-block;
  }
`
const Image = styled.img`
  height: auto;
  width: 100%;
`

const HelloWorld = () => (
  <div>
    <Back>
      <Link to="/">&#8592;</Link>
    </Back>
    <DocumentTitle title="Portafolio Digital para Español II Honores" />
    <Welcome title="Portafolio Digital para Español II Honores" />
    <PostData>
      <Date>12/01/17</Date>
      <ViewCounter id="spanish-project" />
    </PostData>

    <Container>
      <Row>
        <Col sm={6}>
          <Image src="https://lh3.googleusercontent.com/dEYmPweH_wYFRb1xWQ2fOjNh9HT82WlHar6voCbyIOuRVruyFq99YuL27vrXuwYQD8fIkMSruLWmiyM2J4lmJeQrLCttGIIMRXPMvXW2x8ZpchmR0Y87oDDyT3P8m6z80bEeZ22MB6xeDlzkCzbyIpIaON9hlA42SMZAQTLA_rq6tYmpxeXW50-fBUk_HtUMNINrrNFvtVyXqvuP5jBdt5eB7Zkh4k3S7iR9CWNyQbffqNs65J2Smbdt3GjmI2tor8loiT61ZhiwwO61IWEXzs3E-e69rKX2IGVpsh5CbwmojxCltnsMKGSOTpojWpYIC6a69WssfAKqiCFiBkAPUwSGCK5aW03TMsZ4xJyM610VUSmu6zLnWZnstyoC5kYkQt-zOHS2jiwQD3BuXrwKwlIqjU7JwYLlHDzvudYWKX0IKuRK73nzvHF-a3IzxmiFD_zwM_NT9hy90TBMicapEjkbDb_9qcv8h43xlOb594C7hQKLiK3ZzR2JIgrj88QtUKHrjI8DsiHigBplAccpC27oTdr69uXR48a4hhww-TiBKWf-0weNknr9rHg2WCHlQF2S9iSeMQ1n9P9V7CPfXgAi_IZwlT7evBtQ=w2782-h1856-no" />
        </Col>
        <Col sm={6}>
          <h1>
            Bienvenido! Me llamo Samay Shamdasani. Este es mi portafolio
            digital.
          </h1>
          <h2>Tengo dieciséis años. Mi cumpleaños es el diecisiete de mayo.</h2>
          <h2>
            Soy un trabajador duro, optimista y amigable. Me encanta correr,
            comer y dormir.
          </h2>

          <h2>Soy de Little Falls, Nueva Jersey, USA.</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Image src="https://lh3.googleusercontent.com/XOPrLn2wY-rqftof3Gc3-UM6dyQA933kyWkXp0V0M0a2hWhFXe14ipJOQOprxhRtGisI1DqmE1t1K9tqoVl9A8mH0pX07jdhORO0DtoZjRCNCQaQ5Rz0B3tCSvWu_0ju7Ph6v60UzZW8V_33GyZ76-ddB4tEhEIjp6xNGB29ck95o91_vHWyyHpNqHsLL2zrvXTdP8tp4QwaXzK0QCVsfQqj4lPKKYcEMLwIiaNhfQpqJAxyxGC8KDdHbfAwYiR4uDHX0w2UrWHugHUmqhNwu0ul0MkAVyE1NU06KoXb2xbcTUPu5x053LApHId4kTmgrqMYc1LBn0h2Huo7ktFl8E7Sqhnw3Gq2SFvW7EJhVi0vCr-0vVaXXm6CrH-uKiGcSQVDlwTIWo7heje3evPWgZHNrvkM7hQiGmrGQ-EdK7A6dTAozYBQL_EOggux8M4qdQcU1Gsq0RyZCygz8Ob_SiElUXdLahzYfRaJvkjQ8egTq46q_KpZ73RxT69f7vP0gE_nhBJvkmdseslS08siAn-oRhZA9AdY0iiK4VsGD-7JJsprIdoauJ5Lin2vpA2jD12KqvYDSVBRi7ZXHsh5XQKcHZaToAywdGawZdEDPHbtgEhJJzkCZ70jU1EqNYcgT6Gqu_xPLjncFHhLKF3TPnkPcnPSdg=w2782-h1856-no" />
        </Col>
        <Col sm={6}>
          <h1> Esta es mi familia.</h1>
          <h2>Vivo con mis padres y mi hermana. </h2>

          <h2>
            Los nombres de mis padres son Raveena y Johnny. Mi hermana se llama
            Nesa.
          </h2>

          <h2>Mi hermana es muy molesta pero yo amo mi hermana.</h2>

          <h2>
            Tengo que sacar la basura, limpiarla y cocinar de vez en cuando.
          </h2>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Image src="https://lh3.googleusercontent.com/-KPdSUWzeQVrbFHZw8jC1pj_I7_5i5fqEoyOdFkL3UP-ymKT1gTNYD91X0mQ24Y5G_TH1zrMCi5g4U9MtgEVAF6rk0mixhpR4gNyJRjr8X-3SwbbYLJ8JFAlEYrM3Nki0Uqtznqqq3cxuGGjajjdyqqXtKrow7dfivadUZNSGC8zXlxLAW7lrNtcg3cpZex8QEiW59BjBAu8B4C_3cN9W7R2YqNGzPiN6nBe8mM2RAjXInJJS7DsSCc9iz-BTq_40ZlvlmY2gJoTnKbdkETSNz0QR3NTmrvJ7UKGXDPHVrenOXRIvLoHBWdokIpUHOpl4JYfjq0EX4vOMhr3ddSVZ0nOLaDvCmx2_VDcpDIqEIYFb9u2OnAFD50UdnaXZmcEbUtYXqw8xTVBgK51I0ybEf8fhUzcrDycOE3R0nORTH2PofHhQvwzhQUKzQeEh8peHJ86S43itUh9LGP8K1dgPPKGQksA4VpoY7qM3WkfdB61_h9zStelgkP-pD44-PdNlSthALwrrt56zdTHV1eCh7rwxcawKSDcIb3IXhpPttS07JWaRdUywpKAMhPovE5OjClSSwDGt6wDGwZqQJRyLaQrUyJLP-EJjTSd=w2782-h1856-no" />
        </Col>
        <Col sm={6}>
          <h2>
            Corro en mi tiempo libre. Mis deportes favoritos son el baloncesto y
            correr porque me gusta jugar esos deportes.
          </h2>
          <h2>
            En general, me gusta hacer cosas nuevas. Me encanta ir de aventuras.
            Me encanta viajar. No me gusta hacer las mismas cosas.
          </h2>
          <h2>Mi clase favorita es el español porque es divertido.</h2>
          <h2>Por último, me encanta comer pizza.</h2>
        </Col>
      </Row>
      <Subtitle
        g="linear-gradient(to right, #355c7d, #6c5b7b, #c06c84);"
        name="Mis Escritos"
      />
      <Subtitle
        g="linear-gradient(to right, #23074d, #cc5333);"
        name="Mis Presentaciones"
      />
      <Subtitle
        g="linear-gradient(to right, #fc4a1a, #f7b733);"
        name="Mis trabajos favoritos"
      />
      <Subtitle
        g="linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d);"
        name="Mis Videos"
      />
      <Subtitle
        g="linear-gradient(to right, #ff4b1f, #1fddff);"
        name="Reflexión Personal"
      />
    </Container>
  </div>
)
export default HelloWorld
