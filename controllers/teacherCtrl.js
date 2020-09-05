const Teacher = require('../models/Teacher')


exports.postTeacher =async (req,res) =>{
    try {
        const {tId, name} = req.body

        let teacher = new Teacher({
            tId,name
        })
        await teacher.save()
        res.status(201).json({msg:'Teacher create success', data: teacher})
    } catch (error) {
        console.log(error)
    }
}

exports.getTeacher = async (req,res) =>{
    try {
        const teacher = await Teacher.find()
        res.status(201).json(teacher)
    } catch (error) {
        console.log(error)
    }
}

exports.delTeacher = async ( req,res) =>{
    try {
        await Teacher.findByIdAndRemove(req.params.id)
        res.json({msg:'Teacher deleted'})
    } catch (error) {
        console.log(error)
    }
 }