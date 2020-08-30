const express = require('express')
const historyControllers = require('../controllers/history')

const router = express.Router()

router
.get('/getall', historyControllers.getAll)
.get('/getdetail/:id_history',historyControllers.getDetail)
.post('/add', historyControllers.addHistory)
.put('/edit/:id_history', historyControllers.update)
.delete('/delete/:id_history', historyControllers.delete)

module.exports = router