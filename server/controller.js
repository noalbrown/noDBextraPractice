const workbench = require('./workbench.json')

module.exports = {
  getWorkbench: (req, res) => {
    res.status(200).send(workbench)
  }
}