const categoryModel = require('../models/category')

const category = {
    getAll: (req,res) => {
        categoryModel.getAll()
        .then((result)=> {
            res.json(result)
        })
        .catch((err)=> {
            const error = {
                message:err.message
            }
            res.json(error)
        })
    },
    insert: (req,res) => {
        const body = req.body
        categoryModel.insert(body)
        .then((result)=> {
            res.json(result)
        })
        .catch((err)=> {
            const error = {
                message:err.message
            }
            res.json(error)
        })
    }
}

module.exports = category