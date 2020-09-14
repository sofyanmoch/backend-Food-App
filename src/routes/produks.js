const express =require('express')
const produksControllers = require('../controllers/produks')
const { authentication, authorization } = require('../helpers/auth')
// const cors = require('cors')

// var corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
   
const upload = require('../helpers/upload')
const router = express.Router()

router
.get('/getall', authentication, authorization, produksControllers.getAll)
.get('/getdetail/:id_produks', authentication, authorization,produksControllers.getDetail)
.post('/add', upload.single('image'), authentication, authorization,produksControllers.addProduk)
.put('/edit/:id_produks',upload.single('image'), authentication, authorization,produksControllers.update)
.patch('/edit/:id_produks', upload.single('image'), authentication, authorization,produksControllers.updPatch)
.delete('/delete/:id_produks',authentication, authorization,produksControllers.delete)


module.exports = router