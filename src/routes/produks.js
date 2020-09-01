const express =require('express')
const produksControllers = require('../controllers/produks')

const router = express.Router()
router
.get('/getall', produksControllers.getAll)
.get('/getdetail/:id_produks', produksControllers.getDetail)
.post('/add', produksControllers.addProduk)
.put('/edit/:id_produks', produksControllers.update)
.delete('/delete/:id_produks',produksControllers.delete)


module.exports = router