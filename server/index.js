const express = require('express')
const { getWorkbench, getWorkbenchItem } = require('./controller')
const app = express()

const port = 4001

app.use(express.json())

app.get('/api/workbench', getWorkbench)
app.get('/api/backpack/:id', getWorkbenchItem)

app.listen(port, () => console.log(`I am working properly on ${port}`))