let workbench = require('./workbench.json')
let id = workbench[workbench.length - 1].id + 1

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
  }
}