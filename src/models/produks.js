const db = require('../configs/db')

const produks = {
    getAll: (orders,limit,offset,sort,ascDesc) => {
        return new Promise((resolve,reject)=>{
            db.query(`select produk.id , produk.name , produk.price , categories.category_name ,produk.image from produk INNER JOIN categories ON produk.category_id = categories.id where name LIKE '%${orders}%' ORDER BY ${sort} ${ascDesc} LIMIT ${offset},${limit} `,(err,result) => {
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
            db.query(`SELECT produk.id , produk.name , produk.price , categories.category_name ,produk.image FROM produk INNER JOIN categories ON produk.category_id = categories.id WHERE produk.id = '${id}'`,(err,result) => {
                err ? reject(new Error(err)) : resolve(result)
            })
        })
    },
    addProduk: (data) => {
    return new Promise((resolve,reject)=>{
            db.query(`insert into produk (name,price,image,category_id)values('${data.name}','${data.price}','${data.image}','${data.category_id}')`,(err,result)=>{
                err ? reject(new Error(err)) : resolve(result)
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
                    !err ? resolve(result) : reject(new Error(err))
                })
            })
        },
    delete: (id) => {
        return new Promise((resolve,reject)=>{
                db.query(`delete from produk where id = '${id}'
                `,(err,result)=>{
                    err ? reject(new Error(err)) : resolve(result)
                })
            })
        }
}

module.exports = produks