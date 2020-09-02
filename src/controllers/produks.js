const produksModel = require('../models/produks')
const response = require('../helpers/response')

const produks = {
    getAll: (req,res) => {
        try {
        let {sort,ascDesc} = req.query;
        if(sort ==="" || sort=== undefined ){
            sort = "id"
        }
        if (ascDesc === "" || ascDesc === undefined) {
            ascDesc = "ASC";
          }

        const name = !req.query.name ? "" : req.query.name
        const limit = !req.query.limit? '':req.query.limit
        const page = !req.query.page? 1: req.query.page
        const offset = page ===1 ? 0:(page-1)*limit

        produksModel.getAll(name,limit,offset,sort,ascDesc)
        .then((result)=>{
            response.success(res,result,"Get all produks success")
        }) 
    } catch {
        response.failed(res,[],'internal server eror')
    }
},
    getDetail: (req,res) => {
        try {
        const id = req.params.id_produks
        produksModel.getDetail(id)
        .then((result)=>{
            response.success(res,result,"Get detail produks success")
        })
        
    } catch {
            response.failed(res,[],'internal server error')
        }
    },
    addProduk: (req,res) => {
        const body = req.body
        body.image = req.file.filename
        produksModel.addProduk(body)
        .then((result)=>{
            response.success(res,result,"Add produks produks success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
    },
    update: (req,res) => {
        const data = req.body
        const id = req.params.id_produks
        data.image = req.file.filename
        produksModel.update(data,id)
        .then((result)=>{
            response.success(res,result,"Update produks success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
    },
    updPatch: (req,res) => {
        const data = req.body
        const id = req.params.id_produks
        data.image = req.file.filename
        produksModel.updPatch(data,id)
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