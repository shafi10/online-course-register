import React,{useContext, useEffect} from 'react'
import { CourseApi } from '../../contextApi/course/CourseContext'
import {studentApi} from '../../contextApi/student/StudentContext'
import {TeacherApi} from '../../contextApi/teacher/TeacherContext'
import Spinner from '../layout/Spinner'

export const SingleCourse = (props) => {
     const {getSingleCourse, singleCourse, loading, regiStudent, regiTeacher,deleteStudent,deleteTeacher } = useContext(CourseApi)
     const { getStudents, students } = useContext(studentApi)
     const {getTeacher, teachers} = useContext(TeacherApi)
       const registerStudent = (id, student, name, sId) =>{
        const newRegi ={ id, student, name, sId }
        regiStudent(newRegi)
    } 
     useEffect(()=>{
        getSingleCourse(props.match.params.id)
     },[registerStudent])

     useEffect(()=>{
        getStudents()
        getTeacher()
     },[])


     const registerTeacher = (id,teacher,tId,name) =>{
         const newRegi = { id, teacher, tId, name}

         regiTeacher(newRegi)
     }

     const delStudent =(id, stuId)=>{
         const delStu ={ id, stuId}
         deleteStudent(delStu)
     }

     const delTeacher = (id, techId) =>{
         deleteTeacher(id,techId)
     }
       
    return loading ? <Spinner /> : (
      <div>
          <div className="heading">
                <h2>Subject details with registerd Students and Teacher</h2>
            </div>
        <div className="single-course">
            <div className="course-details">
                <h3>Subject Details</h3>
                <ul>
                   <li>Subject Name: {singleCourse && singleCourse.name}</li>
                   <li>Subject Category: {singleCourse && singleCourse.category}</li>
                   <li>Subject Year: {singleCourse && singleCourse.year}</li>
                </ul>
            </div>
            <div className="student-details">
                <h3>Registered Student</h3>
                <table id="tables">
                <thead>
                   <tr>
                    <th>Student Id</th>
                    <th>Name</th>
                    <th>Action</th>
                   </tr>
                   </thead>
                  { singleCourse  && singleCourse.students.map(student=>
                  <tbody key={student._id}>
                     <tr>
                     <td>{student.sId}</td>
                       <td>{student.name}</td>
                       <td><button onClick={() => delStudent(props.match.params.id, student._id)}>Delete</button></td>
                      </tr>
                      </tbody>
                      )}
  
              </table>
              </div>  
              <div className="teacher-details">
                <h3>Registered Teacher</h3>
                    {singleCourse && singleCourse.teachers.map(teacher=>
                    <ul key={teacher._id}>
                         <li>Teacher Id: {teacher.tId}</li>
                        <li>Teacher Name: {teacher.name}</li>
                        <li><button onClick={() => delTeacher(props.match.params.id, teacher._id)}>Delete</button></li>
                        </ul>
                     )}
                
                </div>
            </div>
            <div className="second">
            <div className="student-list">
                <div className="heading">
                  <h3>Students List</h3>
                </div>
                {singleCourse && singleCourse.students.length >= 40 ? <div className="heading">Registration already complete for this course</div> :
            <table id="tables">
            <thead>
             <tr>
                <th>Student Id</th>
                <th>Name</th>
                <th>Year</th>
                <th>Action</th>
            </tr>
            </thead>
            { students.map(student => 
            <tbody key={student._id}>
            <tr>
              <td>{student.sId}</td>
              <td>{student.name}</td>
              <td>{student.sYear}</td>
              <td><button onClick={() => registerStudent(props.match.params.id,student._id,student.name,student.sId) }>Add</button></td>
           </tr>
           </tbody>
             )}
  
            </table>
              } 
            </div>
            <div className="teacher-list">
            <div className="heading">
                  <h3>Teachers List</h3>
                </div>
                {singleCourse && singleCourse.teachers.length > 0 ? <div className="heading">Teacher Already registered </div> : 
            <table id="tables">
            <thead>
             <tr>
                <th>Teacher Id</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
            </thead>
            { teachers.map(teacher => 
            <tbody key={teacher._id}>
            <tr>
              <td>{teacher.tId}</td>
              <td>{teacher.name}</td>
              <td><button onClick={() => registerTeacher(props.match.params.id, teacher._id, teacher.tId, teacher.name) }>Add</button></td>
           </tr>
           </tbody>
             )}
  
            </table> }
            </div>
            </div>
        </div>
    )
}
