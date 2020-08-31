const express = require('express')
const categoryControllers = require('../controllers/category')

const router = express.Router()

router
.get('/getall', categoryControllers.getAll)
.post('/add', categoryControllers.insert)

module.exports = router