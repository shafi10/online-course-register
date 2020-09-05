const express = require('express')
const router = express.Router()
const {getUser, postUser, postRegi} = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

router.get('/', auth ,getUser)
router.post('/',postUser)
router.post('/regi', postRegi)

module.exports = router