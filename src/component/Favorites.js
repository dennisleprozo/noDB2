import React, { Component } from 'react'
import App from '../App'

export default class Favorites extends Component {
  render() {
    return (
      <div>
        <App ToDisplay faveListToDisplay={faveListToDisplay} />
      </div>
    )
  }
}
