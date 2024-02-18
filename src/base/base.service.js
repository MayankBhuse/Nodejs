
let BaseModel = new  (require('./base.model'))();

module.exports = class BaseService {
    async  createPost(data){
         console.log("BaseService::",data)
         BaseModel.createPost(data)
     }
     async  readPost(data){
        console.log("BaseService::",data)
        let aryan = await BaseModel.readPost(data)
        aryan = aryan.map(boomy=>{return`${boomy.country_id} ${boomy.country}`}) 
        return aryan
    }
 }