import React from 'react'

const Options = (props) => {
  return (
    <div className="options">
      <div id="modify">
        <button onClick={() => props.toggleModify()}>Modify</button>
      </div>
      <div id="delete">
        <button onClick={() => props.deleteItem(props.workbench.id)}>Destroy</button>
      </div>
    </div>
  )
}

export default Options