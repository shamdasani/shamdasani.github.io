import React, { Component } from 'react'

class DocumentTitle extends Component {
  constructor(props) {
    super(props)
    document.title = this.props.title
  }
  render() {
    return <div />
  }
}

export default DocumentTitle
