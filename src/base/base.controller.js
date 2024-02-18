let BaseService = new  (require('./base.service'))();

module.exports = class BaseApis {
   async  createPost(req,res){
        console.log("Controller 1",(req))
        console.log("2",req.data)
        console.log("3",req.body)
        console.log("4",req.query)
        BaseService.createPost(req.query)
    }
    async  readPost(req,res){
        let response = await BaseService.readPost(req.query)
        res.send(response)
    }
}