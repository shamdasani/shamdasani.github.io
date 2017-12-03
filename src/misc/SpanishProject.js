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

import Image1 from '../img/spanish-project/run.jpg'
import Image2 from '../img/spanish-project/fam.jpg'
import Image3 from '../img/spanish-project/run2.jpg'

import { Row, Col } from 'react-grid-system'

const Container = styled.div`
  margin: 2%;
  font-size: 1.3em;

  a {
    color: #ffffff;
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

const Navbar = styled.nav`
  margin-top: 8%;
  margin-bottom: 5%;
  display: table;
  text-align: center;
  box-shadow: 10px 10px 5px #e3e4e5;

  width: 100%;
  background: linear-gradient(to right, #56ccf2, #2f80ed);
`
const NavContainer = styled.div`display: table-row;`

const NavItem = styled.a`
  padding: 1rem;
  display: table-cell;

  @media screen and (max-width: 700px) {
    display: block;
  }
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
      <Navbar>
        <NavContainer>
          <NavItem href="#escritos">Mis Escritos</NavItem>
          <NavItem href="#presentaciones">Mis Presentaciones</NavItem>
          <NavItem href="#trabajos">Mis trabajos favoritos</NavItem>
          <NavItem href="#videos">Mis Videos</NavItem>
          <NavItem href="#personal">Reflexión Personal</NavItem>
        </NavContainer>
      </Navbar>
      <Row>
        <Col sm={6}>
          <Image src={Image1} />
        </Col>
        <Col sm={6}>
          <h1>
            Bienvenido! Me llamo Samay Shamdasani. Este es mi portafolio
            digital.
          </h1>
          <h3>
            Tengo dieciséis años. Mi cumpleaños es el diecisiete de mayo. Soy un
            trabajador duro, optimista y amigable. Soy un estudiante en la
            escuela de San Pedro. Me encanta correr, comer y dormir. Soy de
            Little Falls, Nueva Jersey, USA.
          </h3>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Image src={Image2} />
        </Col>
        <Col sm={6}>
          <h1> Esta es mi familia.</h1>
          <h3>
            Vivo con mis padres y mi hermana. Mi madre se llama Raveena y mi
            padre se llama Johnny. Mi hermana se llama Nesa. Mi hermana es muy
            molesta pero yo amo mi hermana. En mi casa, tengo que sacar la
            basura, limpiarla y cocinar de vez en cuando. No tengo mascotas.
          </h3>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Image src={Image3} />
        </Col>
        <Col sm={6}>
          <h1>Más sobre mí</h1>
          <h3>
            Corro en mi tiempo libre. Mis deportes favoritos son el baloncesto y
            correr porque me gusta jugar esos deportes. En general, me gusta
            hacer cosas nuevas. Me encanta ir de aventuras. Me encanta viajar.
            No me gusta hacer las mismas cosas. Mi clase favorita es el español
            porque es muy divertido. Por último, me encanta comer pizza a veces.
          </h3>
          <h3>
            Mi estilo de vida es muy sano. Yo suelo dormir siete horas al día.
            Me despierto a las cinco y media de la mañana. Además, como un
            desayuno saludable, almuerzo y cena. Es necesario comer una dieta
            sana para su salud. Deberías seguir una dieta saludable.
          </h3>
        </Col>
      </Row>
      <Subtitle
        g="linear-gradient(to right, #355c7d, #6c5b7b, #c06c84);"
        name="Mis Escritos"
        id="escritos"
      />
      <Subtitle
        g="linear-gradient(to right, #23074d, #cc5333);"
        name="Mis Presentaciones"
        id="presentaciones"
      />
      <Subtitle
        g="linear-gradient(to right, #fc4a1a, #f7b733);"
        name="Mis trabajos favoritos"
        id="trabajos"
      />
      <Subtitle
        g="linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d);"
        name="Mis Videos"
        id="videos"
      />
      <Subtitle
        g="linear-gradient(to right, #ff4b1f, #1fddff);"
        name="Reflexión Personal"
        id="personal"
      />
    </Container>
  </div>
)
export default HelloWorld
