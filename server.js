const express = require('express')
const cors = require('cors')

const projects = require('./projects.json')
const about = require('./about.json')

console.log(projects)

const app= express()

//MIDDLEWARE
app.use(cors());

//HOME ROUTE FOR TESTING OUR APP
app.get('/', (req, res) => {
    res.send('Hello World')
})

//ROUTE FOR PROJECTS
app.get('/projects', (req, res) => {
    res.json(projects)
})

//ROUTE FOR ABOUT ME
app.get('/about', (req, res) => {
    res.json(about)
})

const PORT = 4000

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})