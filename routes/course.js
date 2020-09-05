const express = require('express')
const router = express.Router()

const { getCourse, postCourse, singleCourse, addStudent, addTeacher, deleteStudent,deleteTeacher, delCourse} = require('../controllers/courseCtrl')

router.get('/',getCourse)
router.post('/',postCourse)
router.delete('/:id', delCourse)
router.get('/single/:id', singleCourse)
router.put('/student', addStudent)
router.put('/teacher', addTeacher)
router.post('/stu/del', deleteStudent)
router.delete('/tec/:id/:techId',deleteTeacher)




module.exports = router