let express = require('express')
let router = express.Router()

let BaseApis = new  (require('./base.controller'))();

router.post('/create',BaseApis.createPost)
router.get('/read',BaseApis.readPost)
router.post('/update',BaseApis.createPost)
router.post('/delete',BaseApis.createPost)

module.exports = router