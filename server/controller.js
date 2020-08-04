let workbench = require('./workbench.json')
let id = workbench[workbench.length - 1].id + 1
let emptyWorkbench = workbench[workbench.length - 1].id + 1

module.exports = {
  getWorkbench: (req, res) => {
    res.status(200).send(workbench)
  },

  getWorkbenchItem: (req, res) => {
    let { id } = req.params
    let foundWorkbenchItem = workbench.find(foundWorkbenchItem => foundWorkbenchItem.id === +id)
    if (!foundWorkbenchItem) {
      return res.status(410).send('Item not in Workbench')
    }
    res.status(200).send(foundWorkbenchItem)
  },

  addWorkbenchItem: (req, res) => {
    let { style, hilt, color } = req.body
    let newWorkbenchItem = { id, style, hilt, color }
    workbench.push(newWorkbenchItem)
    id++
    if (!newWorkbenchItem) {
      return res.status(404).send('Could Not Create')
    }
    res.status(200).send(workbench)
  },

  modifyWorkbench: (req, res) => {
    let { style, hilt, color } = req.body
    let i = workbench.findIndex(e => e.id === +req.params.id)
    workbench[i] = { ...workbench[i], style, hilt, color }
    if (!i) {
      return res.status(404).send('Could Not Modify Your Item')
    }
    res.status(200).send(workbench)
  },

  deleteItem: (req, res) => {
    let { id } = req.params
    let index = workbench.findIndex(e => e.id === +id)
    workbench.splice(index, 1)
    if (!index) {
      return res.status(404).send('Could not Destroy')
    }
    res.status(200).send(workbench)
  },

  resetWorkbench: (req, res) => {
    workbench = [...emptyWorkbench]
    res.status(200).send(workbench)
  }
}