const express = require('express') 
const router = express.Router()
const controller = require('../controller/createGroup.controller')

// Validate
//const validate = require('../validates/auth.validate.js');

// route
router.post('/', controller.postGroup)
router.get('/', controller.getGroup)


module.exports = router
