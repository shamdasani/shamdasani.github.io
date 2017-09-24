import React, { Component } from 'react'
import 'particles.js/particles'

const particlesJS = window.particlesJS

class Particles extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.createParticles()
  }

  createParticles() {
    particlesJS.load('particles-js', '/particles.json', function() {
      console.log('callback - particles.js config loaded')
    })
  }

  render() {
    return (
      <div>
        <div id="particles-js" />
        <style>
          {`
          #particles-js {
            position:absolute;
            width: 100%;
            height: 100%;
            z-index:1;
          }
          `}
        </style>
      </div>
    )
  }
}

export default Particles
