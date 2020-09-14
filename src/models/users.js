const db = require('../configs/db')

const users = {
    register: (data) => {
    return new Promise((resolve,reject)=>{
            db.query(`INSERT INTO users SET ?`,data,(err,result)=>{
                err ? reject(new Error(err)) : resolve(result)
            })
        })
    },
    login: (data) => {
        return new Promise((resolve,reject)=>{
                db.query(`SELECT * from users where  email = ?`, data.email,(err,result)=>{
                    err ? reject(new Error(err)) : resolve(result)
                })
            })
        }
}

module.exports = users