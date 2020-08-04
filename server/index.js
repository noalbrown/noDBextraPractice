const express = require('express')
const { getWorkbench, getWorkbenchItem, addWorkbenchItem, modifyWorkbench, deleteItem, resetWorkbench } = require('./controller')
const app = express()

const port = 4001

app.use(express.json())

app.get('/api/workbench', getWorkbench)
app.get('/api/workbench/:id', getWorkbenchItem)
app.post('/api/workbench', addWorkbenchItem)
app.put('/api/workbench/edit/:id', modifyWorkbench)
app.delete('/api/workbench/:id', deleteItem)
app.delete('/api/workbench', resetWorkbench)

app.listen(port, () => console.log(`I am working properly on ${port}`))