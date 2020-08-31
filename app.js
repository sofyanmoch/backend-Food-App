const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const routerNavigation = require('./src/router')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/',routerNavigation)
app.listen(port,()=>{
    console.log(`app running on port ${port}`)
})