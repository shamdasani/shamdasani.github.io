import React, { Component } from 'react'
// import styled from 'styled-components'
//
// const CounterText = styled.div`
//   color: #545659;
//   letter-spacing: 2px;
//   text-transform: uppercase;
//   display: inline-block;
// `
class Entries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      : []
    }
  }
  componentDidMount() {
    const URL = 'https://shamdasani-views.now.sh/?id='
    const id = this.props.id
    fetch(URL + id)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.total }))
  }

  render() {
    const { hits } = this.state
    return <div>&nbsp;- {hits} views</div>
  }
}

export default Entries

// fix this to add journal entries
