const db = require('../configs/db')

const produks = {
    getAll: () => {
        return new Promise((resolve,reject)=>{
            db.query('select * from produk',(err,result)=>{
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
            db.query(`select * from produk where id = '${id}'`,(err,result)=>{
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