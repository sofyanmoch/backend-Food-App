const produksModel = require('../models/produks')

const produks = {
    getAll: (req,res) => {
        produksModel.getAll()
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            const error = {
                message: err.message
            }
            res.json(error)
        })
    },
    getDetail: (req,res) => {
        const id = req.params.id_produks
        produksModel.getDetail(id)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            const error = {
                message: err.message
            }
            res.json(error)
        })
    },
    addProduk: (req,res) => {
        const body = req.body
        produksModel.addProduk(body)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            const error = {
                message: err.message
            }
            res.json(error)
        })
    },
    update: (req,res) => {
        const body = req.body
        const id = req.params.id_produks
        produksModel.update(body,id)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            const error = {
                message: err.message
            }
            res.json(error)
        })
    },
    delete: (req,res) => {
        const id = req.params.id_produks
        produksModel.delete(id)
        .then((result)=>{
            res.json(result)
        })
        .catch((err)=>{
            const error = {
                message: err.message
            }
            res.json(error)
        })
    }
}

module.exports = produks