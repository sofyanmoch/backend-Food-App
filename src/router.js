const express = require('express')
const router = express.Router()

//import router
const produksRouter = require('./routes/produks')
const historyRouter = require('./routes/history')
const categoryRouter = require('./routes/category')
const usersRouter = require('./routes/users')

//middleware
router.use('/produks',produksRouter)
router.use('/history',historyRouter)
router.use('/category',categoryRouter)
router.use('/users',usersRouter)

module.exports = router

