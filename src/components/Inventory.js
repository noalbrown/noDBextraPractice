import React, { Component } from 'react'
import Options from './Options'

class Inventory extends Component {
  constructor() {
    super()
    this.state = {
      modify: false,
      style: "",
      hilt: "",
      color: ""
    }
  }

  toggleModify = () => {
    this.setState({
      modify: !this.state.modify
    })
  }

  handleStyle(e) {
    this.setState({
      style: e.target.value
    })
  }

  handleHilt(e) {
    this.setState({
      hilt: e.target.value
    })
  }

  handleColor(e) {
    this.setState({
      color: e.target.value
    })
  }

  render() {
    const { workbench, modifyWorkbench, deleteItem } = this.props
    return (
      <div key={workbench.id}>
        {this.state.modify ? (
          <div className="pop-up">
            <input placeholder="Change style" onChange={(e) => {
              this.handleStyle(e)
            }} />
            <input placeholder="Change hilt" onChange={(e) => {
              this.handleHilt(e)
            }} />
            <input placeholder="Change color" onChange={(e) => {
              this.handleColor(e)
            }} />
            <div>
              <button onClick={() => {
                modifyWorkbench(workbench.id, this.state.style, this.state.hilt, this.state.color)
                this.toggleModify()
              }}>Change Saber</button>
              <button onClick={this.toggleModify}>Cancel</button>
            </div>
          </div>
        ) : (
            <div>
              <section>
                <p>A {workbench.style} {workbench.color} saber with a {workbench.hilt} hilt</p>
              </section>
              <section id="inventory-1">
                <Options
                  toggleModify={this.toggleModify}
                  deleteItem={deleteItem}
                  workbench={workbench} />
              </section>
            </div>
          )}
      </div>
    )
  }
}

export default Inventory