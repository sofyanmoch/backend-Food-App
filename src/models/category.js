const db = require('../configs/db')

const category = {
    getAll: () => {
        return new Promise((resolve,reject)=> {
            db.query(`select * from categories`,(err,result)=> {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
    },
    insert: (data) => {
        return new Promise((resolve,reject)=> {
            db.query(`insert into categories(category_name)VALUES('${data.category_name}')`,(err,result)=> {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
    }
}

module.exports = category