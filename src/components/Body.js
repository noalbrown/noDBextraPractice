import React, { Component } from 'react'
import axios from 'axios'
import Creator from './Creator'

class Body extends Component {
  constructor() {
    super()
    this.state = {
      workbench: []
    }
  }

  addWorkbenchItem(style, hilt, color) {
    axios.post('/api/workbench', { style, hilt, color }).then(res => {
      this.setState({
        backpack: res.data
      })
    }).catch(error => console.log(error))
  }

  render() {
    return (
      <div className="body">
        <section>
          <Creator addWorkbenchItem={this.addWorkbenchItem} />
        </section>
        <section></section>
        <section></section>
      </div>
    )
  }
}

export default Body