const db = require('../configs/db')

const history = {
    getAll: () => {
        return new Promise((resolve,reject) => {
            db.query(`select * from history`,(err,result)=> {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
    },
    getDetail: (id) => {
        return new Promise((resolve,reject) => {
            db.query(`select * from history where id='${id}'`,(err,result)=> {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
    },
    addHistory: (data) => {
        return new Promise((resolve,reject) => {
            db.query(`insert into history (invoice,cashier,amount)values('${data.invoice}','${data.cashier}','${data.amount}')`,(err,result)=> {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
    },
   update: (data,id) => {
        return new Promise((resolve,reject) => {
            db.query(`UPDATE history SET 
            invoice = '${data.invoice}',
            cashier = '${data.cashier}',
            amount = '${data.amount}'
            where id = '${id}'
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
        return new Promise((resolve,reject) => {
            db.query(`delete from history
            where id = '${id}'
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

module.exports = history