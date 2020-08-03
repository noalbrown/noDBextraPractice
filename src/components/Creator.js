import React, { Component } from 'react'

class Creator extends Component {
  constructor() {
    super()
    this.state = {
      style: "",
      hilt: "",
      color: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAdd(e) {
    const { style, hilt, color } = this.state
    e.preventDefault()
    this.props.addWorkbenchItem(style, hilt, color)
    this.setState({ supplies: "", hilt: "", color: "" })
  }

  render() {
    const { style, hilt, color } = this.state
    return (
      <form className="form" onSubmit={(e) => this.handleAdd(e)}>

        <input
          name='style'
          value={style}
          placeholder='One-Handed/Two-Handed?'
          // Drop down menu ^
          onChange={this.handleChange} />

        <input
          name='hilt'
          value={hilt}
          placeholder="What Handle?"
          // Drop down menu ^
          onChange={this.handleChange} />

        <input
          name='color'
          value={color}
          placeholder="Color Crystal"
          // Drop down menu ^
          onChange={this.handleChange} />
        <button type="submit">Create Saber</button>
        {/* // Icon with React SVG ^ */}

      </form>
    )
  }
}

export default Creator