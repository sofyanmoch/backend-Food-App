const db = require('../configs/db')

const produks = {
    getAll: (nama) => {
        return new Promise((resolve,reject)=>{
            db.query(`select * , produk.id as id from produk INNER JOIN categories ON produk.category_id = categories.id ORDER BY name `,(err,result)=>{
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
            db.query(`select *, produk.id as id from produk inner join categories ON produk.category_id = categories.id where produk.id = '${id}'`,(err,result)=>{
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
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
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
                    if(err){
                        reject(new Error(err))
                    }else{
                        resolve(result)
                    }
                })
            })
        },
        delete: (id) => {
            return new Promise((resolve,reject)=>{
                    db.query(`delete from produk where id = '${id}'
                    `,(err,result)=>{
                        if(err){
                            reject(new Error(err))
                        }else{
                            resolve(result)
                        }
                    })
                })
            }
}
module.exports = produks