const Student = require('../models/Student')


exports.postStudent =async (req,res) =>{
    try {
        const {sId, name, sYear} = req.body

        let student = new Student({
            sId,name,sYear
        })
        await student.save()
        res.status(201).json({msg:'Student create success', data: student})
    } catch (error) {
        console.log(error)
    }
}

exports.getStudent = async (req,res) =>{
    try {
        const student = await Student.find()
        res.status(201).json(student)
    } catch (error) {
        console.log(error)
    }
}
exports.delStudent = async ( req,res) =>{
   try {
       await Student.findByIdAndRemove(req.params.id)
       res.json({msg:'Student deleted'})
   } catch (error) {
       console.log(error)
   }
}