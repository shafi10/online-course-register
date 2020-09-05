const express = require('express')
const router = express.Router()
const {postStudent, getStudent, delStudent} = require('../controllers/studentCtrl')

router.post('/',postStudent)
router.get('/',getStudent)
router.delete('/:id',delStudent)




module.exports = router