const express = require('express') 
const router = express.Router()
const controller = require('../controller/createMarket.controller')

// Validate
//const validate = require('../validates/auth.validate.js');

// route
router.post('/', controller.postMarket)
router.get('/', controller.getMarket)

module.exports = router
