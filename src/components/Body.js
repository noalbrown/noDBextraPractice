import React, { Component } from 'react'
import axios from 'axios'
import Creator from './Creator'
import Inventory from './Inventory'

class Body extends Component {
  constructor() {
    super()
    this.state = {
      workbench: []
    }
    this.addWorkbenchItem = this.addWorkbenchItem.bind(this)
    this.modifyBackpack = this.modifyBackpack.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount() {
    this.getWorkbench()
  }

  getWorkbench = () => {
    axios.get('/api/workbench')
      .then(res => {
        this.setState({
          workbench: res.data
        })
      }).catch(error => console.log(error))
  }

  addWorkbenchItem(style, hilt, color) {
    axios.post('/api/workbench', { style, hilt, color }).then(res => {
      this.setState({
        backpack: res.data
      })
    }).catch(error => console.log(error))
  }

  modifyBackpack = (id, style, hilt, color) => {
    axios.put(`/api/workbench/edit/${id}`, { style, hilt, color })
      .then(res => {
        this.setState({
          backpack: res.data
        })
      }).catch(error => console.log(error))
  }

  deleteItem = (id) => {
    axios.delete(`/api/workbench/${id}`)
      .then(res => {
        this.setState({
          workbench: res.data
        })
      }).catch(error => console.log(error))
  }

  resetItems = () => {
    axios.delete(`/api/workbench`)
      .then(res => {
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
        <section className="inventory">
          {this.state.workbench.map((workbench) => {
            return <Inventory modifyBackpack={this.modifyBackpack} deleteItem={this.deleteItem} resetItems={this.resetItems} workbench={workbench} />
          })}
        </section>
        <section className="reset">
          <button onClick={this.resetItems}>Disassemble All</button>
        </section>
      </div>
    )
  }
}

export default Body