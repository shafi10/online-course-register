const Course = require('../models/Course')

exports.getCourse = async (req, res)=>{ 
   try {
       const course = await Course.find()
       res.json(course)
   } catch (error) {
       console.log(error)
   }
}

exports.postCourse = async (req, res)=>{
   let { name, category, year} = req.body
   try {
       let course = new Course({
           name,category, year
       })
       await course.save()
       res.json(course)
   } catch (error) {
       console.log(error)
   }
}

exports.singleCourse = async (req,res) =>{
       try {
           const course = await Course.findById(req.params.id)
           res.json(course)
       } catch (error) {
           console.log(error)
       }
}

exports.addStudent = async(req,res)=>{
  let { id, student, name, sId} =req.body
  try {
      let newStudent = {
          id, student, name, sId
      }

      let course = await Course.findById(id)
      course.students.unshift(newStudent)
      await course.save()
        res.json(course)
  } catch (error) {
      console.log(error)
  }
}



exports.addTeacher = async(req,res)=>{
    let { id, teacher, tId, name } =req.body
    try {
        let newTeacher = {
            id, teacher, tId, name
        }
  
        let course = await Course.findById(id)
        course.teachers.unshift(newTeacher)
        await course.save()
          res.json(course)
    } catch (error) {
        console.log(error)
    }
  }

exports.deleteStudent = async (req,res) =>{
      const {id, stuId} = req.body
      try {
          let course = await Course.findById(id)
          let removeIndex = course.students.map(student => student._id).indexOf(stuId)
          course.students.splice(removeIndex,1)
          await course.save()
          res.json({msg:'student deleted'})
      } catch (error) {
          console.log(error)
      }
  }


exports.deleteTeacher = async (req,res) =>{
     try {
         let course = await Course.findById(req.params.id)

         let removeIndex = course.teachers.map(teacher => teacher._id).indexOf(req.params.techId)
         course.teachers.splice(removeIndex,1)
         await course.save()
         res.json({ msg: 'Teacher deleted'})
     } catch (error) {
         console.log(error)
     }
}

exports.delCourse = async ( req,res) =>{
    try {
        await Course.findByIdAndRemove(req.params.id)
        res.json({msg:'Course deleted'})
    } catch (error) {
        console.log(error)
    }
 }