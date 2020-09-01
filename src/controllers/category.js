const categoryModel = require('../models/category')
const response = require('../helpers/response')

const category = {
    getAll: (req,res) => {
        categoryModel.getAll()
        .then((result)=>{
            response.success(res,result,"Get all Category success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
    },
    insert: (req,res) => {
        const body = req.body
        categoryModel.insert(body)
        .then((result)=>{
            response.success(res,result,"Add Category success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
    }
}

module.exports = category