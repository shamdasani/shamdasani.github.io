import React, { Component } from 'react'
import styled from 'styled-components'

const TextStyled = styled.h3`
  margin-top: 2rem;
  padding: 5%;
  padding-top: 5%;
  font-size: 2rem;
  font-weight: 300;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
`

const Gradient = styled.div`background: ${props => props.g};`

const Subtitle = ({ g, name, id }) => (
  <Gradient g={g}>
    <TextStyled id={id}>{name}</TextStyled>
  </Gradient>
)
export default Subtitle
