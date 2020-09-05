const express = require('express')
const router = express.Router()
const {getTeacher, postTeacher, delTeacher} = require('../controllers/teacherCtrl')

router.post('/', postTeacher)
router.get('/', getTeacher)
router.delete('/:id', delTeacher)


module.exports = router


