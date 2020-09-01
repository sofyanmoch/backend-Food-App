const historyModel = require('../models/history')
const response = require('../helpers/response')

const history = {
    getAll: (req,res) => {
        historyModel.getAll()
        .then((result) => {
            response.success(res,result,"Get all History success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
    },
    getDetail: (req,res) => {
        const id  =req.params.id_history
        historyModel.getDetail(id)
        .then((result)=>{
            response.success(res,result,"Get Detail history success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
    },
    addHistory: (req,res) => {
        const body =req.body
        historyModel.addHistory(body)
        .then((result)=>{
            response.success(res,result,"Add History success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
    },
    update: (req,res) => {
        const body =req.body
        const id = req.params.id_history
        historyModel.update(body,id)
        .then((result)=>{
            response.success(res,result,"Update History success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
    },
    delete: (req,res) => {
        const id = req.params.id_history
        historyModel.delete(id)
        .then((result)=>{
            response.success(res,result,"Delete history success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
    }
}

module.exports = history