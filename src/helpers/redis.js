const redis = require('redis')
const {success} = require('./response')
const redisClient = redis.createClient()
const _ = require('lodash')
const { off } = require('../configs/db')

module.exports = {
    getAll: (req,res,next) => {
        redisClient.get('produks',(err,data) => {
            if(data){
                const dataRedis = JSON.parse(data)
                const search = !req.query.search?'':req.query.search
                const sortby = !req.query.sortby?'id':req.query.sortby
                const sortType = !req.query.sortType?'asc':req.query.sortType
                // const output = _.filter(dataRedis,(obj) => {
                //     return obj.name.includes(search)
                // })
                const limit = !req.query.limit?2:parseInt(req.query.limit)
                const page = !req.query.page?1:req.query.page
                const start = page ===1?0:(page*limit)-limit
                const offset = start===0?limit:start*limit
                // const output = _.orderBy(dataRedis,[sortby],[sortType])
                const output = _.slice(dataRedis,start,offset)
                success(res,output,'Get produks from redis')
            }else{
                next()
            }
        })    
    }
}