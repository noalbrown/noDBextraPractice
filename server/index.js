const express = require('express')
const { getWorkbench } = require('./controller')
const app = express()

const port = 4001

app.use(express.json())

app.get('/api/workbench', getWorkbench)

app.listen(port, () => console.log(`I am working properly on ${port}`))