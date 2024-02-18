let knex = require('../../config/knex')

module.exports = class BaseModel {
    constructor() {

    }
    async createPost(data){
        console.log("data:",data)
       let obj = await knex('country').insert(data)
       console.log("Query::",obj.toString())
       console.log("obj:",obj)
       return obj
    }
    
    async readPost(data){
        console.log("data:",data)
       let obj = await knex.select('country_id', 'last_update', 'country')
       .from('country')
       return obj
    }
}