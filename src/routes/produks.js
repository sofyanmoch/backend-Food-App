const express =require('express')
const produksControllers = require('../controllers/produks')

const upload = require('../helpers/upload')
const router = express.Router()

router
.get('/getall', produksControllers.getAll)
.get('/getdetail/:id_produks', produksControllers.getDetail)
.post('/add', upload.single('image'), produksControllers.addProduk)
.put('/edit/:id_produks', produksControllers.update)
.delete('/delete/:id_produks',produksControllers.delete)


module.exports = router