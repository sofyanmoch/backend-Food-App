const db = require('../configs/db')

const produks = {
   getAll: (nama,limit,offset) => {
        return new Promise((resolve,reject)=>{
            db.query(`select produk.id , produk.name , produk.price , categories.category_name ,produk.image from produk INNER JOIN categories ON produk.category_id = categories.id where name LIKE '%${nama}%' LIMIT ${offset},${limit} `,(err,result) => {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }  
            })
        })
    },
    getDetail: (id) => {
        return new Promise((resolve,reject)=>{
            db.query(`select produk.id , produk.name , produk.price , categories.category_name ,produk.image from produk INNER JOIN categories ON produk.category_id = categories.id WHERE produk.id = '${id}'`,(err,result) => {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }  
            })
        })
    },
    addProduk: (data) => {
    return new Promise((resolve,reject)=>{
            db.query(`insert into produk (name,price,image,category_id)values('${data.name}','${data.price}','${data.image}','${data.category_id}')`,(err,result)=>{
                !err ? resolve(result) : reject(new Error(error))
            })
        })
    },
    update: (data,id) => {
        return new Promise((resolve,reject)=>{
                db.query(`update produk set 
                name = '${data.name}',
                price='${data.price}',
                image='${data.image}',category_id='${data.category_id}' where id = '${id}'
                `,(err,result)=>{
                    !err ? resolve(result) : reject(new Error(error))
                })
            })
        },
        delete: (id) => {
            return new Promise((resolve,reject)=>{
                    db.query(`delete from produk where id = '${id}'
                    `,(err,result)=>{
                        !err ? resolve(result) : reject(new Error(error))
                    })
                })
            }
}

module.exports = produks