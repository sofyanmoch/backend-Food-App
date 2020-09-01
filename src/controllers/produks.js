const produksModel = require('../models/produks')
const response = require('../helpers/response')

const produks = {
    getAll: (req,res) => {
        const nama = !req.query.nama ? "" : req.query.nama
        produksModel.getAll(nama)
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