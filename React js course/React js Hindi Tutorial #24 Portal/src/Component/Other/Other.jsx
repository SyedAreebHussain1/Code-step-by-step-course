import React, { Component } from 'react'
import reactDOM from 'react-dom' 
class Other extends Component {
  render() {
    return reactDOM.createPortal(
      <div>
        <h1>Protal Component</h1>
       document.getElementById('other-root')
      </div>
    )
  }
}
export default Other