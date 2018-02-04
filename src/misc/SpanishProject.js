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

import Rocio from '../img/spanish-project/rocio.jpg'
import Rocioppl from '../img/spanish-project/rocio-people.jpg'
import Rocioppl2 from '../img/spanish-project/rocio-people-2.jpg'
import Rociodance from '../img/spanish-project/rocio-dance.jpg'
import Rociochurch from '../img/spanish-project/church.jpg'

import { Row, Col } from 'react-grid-system'

const Container = styled.div`
  margin: 2%;
  font-size: 1.3em;

  section a {
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
const NavContainer = styled.section`display: table-row;`

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
    <Welcome
      c="linear-gradient(to right, #56ccf2, #2f80ed);"
      title="Portafolio Digital para Español II Honores"
    />
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
      <h1>La Romería de El Rocío</h1>
      <Row>
        <Col sm={4}>
          <Image src={Rocio} />
        </Col>
        <Col sm={8}>
          <h1>
            ¡Hola! Me llamo Felipe, escritor cultural, religioso, y diversidad
            para el New York Times.
          </h1>
          <h1>Primer día</h1>
          <h3>
            En este post, compartiré mis pensamientos y experiencias cuando fui
            a España. Mis colegas y yo fuimos a un pueblo llamado Almonte. Se
            encuentra en Andalucía, al sur de España. En Almonte, vimos el
            festival de la Romería del Rocío. Esta celebración fue increíble.
            Más de 1 millones de peregrinos participan en honor de la Virgen del
            Rocío.
          </h3>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <h3>
            El festival de la Romería del Rocío se celebra el fin de semana
            anterior al lunes de pentecostés. El Festival comenzó cuando un
            cazador descubrió una estatua de la Virgen María. Allí, se construyó
            una capilla y se convirtió en un lugar de peregrinación. Durante los
            próximos cientos de años, muchas personas en toda España vinieron a
            ver a Rocío. La estatua de la Virgen es muy sagrada y hubo
            peregrinaciones desde 1653.
          </h3>
        </Col>
        <Col sm={4}>
          <Image src={Rocioppl} />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Image src={Rociochurch} />
        </Col>
        <Col sm={8}>
          <h1>Segundo día</h1>

          <h3>
            Me alojé en Almonte en un gran hotel. Cuando salí, vi la procesión
            estaba ocurriendo. Era temprano cuando la estatua salió. La estatua
            de el Rocío fue llevada por toda la ciudad y vi a toda la gente
            celebrando con ella. Además, alguien me dijo que la estatua se llama
            “La Paloma Blanca” porque es tan especial. La gente estaba
            presionando para ver y tocar el Rocio.
          </h3>
          <h3>
            Caminé con la multitud mientras escuchaba los peregrinos alaban la
            virgen rocio. Aunque hubo una celebración, fue caótico. Sin embargo,
            la estatua de la Virgen María era muy hermosa. En Almonte, Comí
            comida cultural muy deliciosa. Yo comí Gazpacho, una sopa de
            verduras crudas y servidas frías. También bebí vino de Jerez. Es muy
            refrescante. Además, Después de la celebración, mi amigo me trajo
            camarones de la bahía de Cádiz.
          </h3>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <h1>Tercer día</h1>

          <h3>
            En el tercer día de nuestro viaje, exploramos la ciudad de el Rocio.
            Fuimos a ver la iglesia Nuestra Señora del Rocio. Era hermoso y
            tranquilo. También hubo muchos caballos salvajes. Me gustó que hubo
            tanta gente feliz en la fiesta. Fue agradable ver cómo todo el mundo
            llegó a la ciudad de el Rocío para ver a la Virgen María. Me fascinó
            la fe de todos los peregrinos. Sin embargo, no me gustó cómo sucia
            la ciudad fue después de la fiesta.
          </h3>
          <h3>
            Una fiesta similar en los Estados Unidos son los festivales durante
            La Semana Santa en las iglesias y en Saint Peter’s Prep. Los
            cristianos se reúnen y oran. Las fiestas de la Virgen María son muy
            importantes para todos los cristianos. En el futuro, me gustaría
            visitar Pamplona para ver las fiestas de San Fermín porque me
            encanta la acción y me encantaría ver el encierro de toros.
          </h3>
        </Col>
        <Col sm={4}>
          <Image src={Rociodance} />
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <h1>Glossary</h1>

          <h3>
            <div>la Romería del Rocío - The Pilgrimage of Rocío</div>
            <div>Peregrinos - pilgrims</div>
            <div>Pentecostés - Christian holiday of the Pentecost</div>
            <div>“La Paloma Blanca” - white dove </div>
            <div>La Semana Santa - holy week</div>

            <h3>
              <a href="https://www.youtube.com/watch?v=cPg1v5HckBk" c="#000">
                YouTube Video
              </a>
            </h3>
          </h3>
        </Col>
        <Col sm={4}>
          <Image src={Rocioppl2} />
        </Col>
      </Row>
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
