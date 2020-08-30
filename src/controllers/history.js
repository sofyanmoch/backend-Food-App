const historyModel = require('../models/history')

const history = {
    getAll: (req,res) => {
        historyModel.getAll()
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
        const id  =req.params.id_history
        historyModel.getDetail(id)
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
    addHistory: (req,res) => {
        const body =req.body
        historyModel.addHistory(body)
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
        const body =req.body
        const id = req.params.id_history
        historyModel.update(body,id)
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
        const id = req.params.id_history
        historyModel.delete(id)
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

module.exports = history