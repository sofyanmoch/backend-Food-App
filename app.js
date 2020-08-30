const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const produksRouter = require('./src/routes/produks')
const historyRouter = require('./src/routes/history')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/produks',produksRouter)
app.use('/history',historyRouter)

app.listen(port,()=>{
    console.log(`app running on port ${port}`)
})