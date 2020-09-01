const produksModel = require('../models/produks')
const response = require('../helpers/response')

const produks = {
    getAll: (req,res) => {
        const nama = !req.query.nama ? "" : req.query.nama
        const limit = !req.query.limit? '':req.query.limit
        const page = !req.query.page? 1: req.query.page
        const offset = page ===1 ? 0:(page-1)*limit
        produksModel.getAll(nama,limit,offset)
        .then((result)=>{
            response.success(res,result,"Get all produks success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
    },
    getDetail: (req,res) => {
        const id = req.params.id_produks
        produksModel.getDetail(id)
        .then((result)=>{
            response.success(res,result,"Get detail produks success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
    },
    addProduk: (req,res) => {
        const body = req.body
        produksModel.addProduk(body)
        .then((result)=>{
            response.success(res,result,"Add produks produks success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
    },
    update: (req,res) => {
        const body = req.body
        const id = req.params.id_produks
        produksModel.update(body,id)
        .then((result)=>{
            response.success(res,result,"Update produks success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
    },
    delete: (req,res) => {
        const id = req.params.id_produks
        produksModel.delete(id)
        .then((result)=>{
            response.success(res,result,"Delete produks success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
    }
}

module.exports = produks