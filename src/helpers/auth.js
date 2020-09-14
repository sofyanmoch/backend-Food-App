const jwt = require('jsonwebtoken')
const { tokenResult } = require('./response')
const { secretKey } = require('./env')

module.exports = {
    authentication: (req,res,next) => {
        const token = req.headers.token 
        if(token === undefined || token === ''){
            tokenResult(res,[],'Token harus diisi')
        }else{
            next()
        }
    },
    authorization: (req,res,next) => {
        const token = req.headers.token

        // jwt.verify(token,'privateKey',(err,decoded)

        jwt.verify(token,secretKey,(err,decoded) => {
            if(err){
                tokenResult(res,[], 'Token salah')
            }else{
                next()
            }
        })
    }
}