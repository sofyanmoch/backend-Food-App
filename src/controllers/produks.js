const produksModel = require('../models/produks')
const response = require('../helpers/response');

const produks = {
    getAll: (req,res) => {
        try {
        const sortby = !req.query.sort?'id': req.query.sort
        const type = !req.query.ascDesc? "ASC" :req.query.ascDesc 
        const name = !req.query.name ? "" : req.query.name
        const limit = !req.query.limit? 5 : parseInt(req.query.limit)
        const page = !req.query.page? 1 : parseInt(req.query.page)
        const offset = page ===1 ? 0:(page-1)*limit
        
        produksModel.getAll(name,limit,offset,sortby,type)
        .then((result)=>{
            response.success(res,result,"Get detail produks success")
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
        try{
        const body = req.body
        body.image = req.file.filename
        produksModel.addProduk(body)
        .then((result)=>{
            response.success(res,result,"Add produks produks success")
        })
    } catch (err){
        response.failed(res,[],err.message)
    }
    },
    update: (req,res) => {
        try {
        const data = req.body
        const id = req.params.id_produks
        data.image = req.file.filename
        produksModel.update(data,id)
        .then((result)=>{
            response.success(res,result,"Update produks success")
        })
    } catch(err) {
        response.failed(res,[],err.message)
    }
    },
    updPatch: (req,res) => {
        try{
        const data = req.body
        const id = req.params.id_produks
        data.image = req.file.filename

        // if(data.image === ""){
        //     data.image === imgOld
        // }
        
        produksModel.updPatch(data,id)
        .then((result)=>{
            response.success(res,result,"Update produks success")
        })
        } catch (err) {
            response.failed(res,[],err.message)
        }
        
    },
    delete: (req,res) => {
        try {
            const id = req.params.id_produks
        produksModel.delete(id)
        .then((result)=>{
            response.success(res,result,"Delete produks success")
        })
    } catch (err){
        response.failed(res,[],err.message)
    }
        
    }
}

module.exports = produks