const express =require('express')
const transaksiControllers = require('../controllers/transaksi')
const router = express.Router()

router
    .post('/insert', transaksiControllers.insert)




module.exports = router