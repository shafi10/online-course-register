import React,{useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {studentApi} from '../../contextApi/student/StudentContext'
import Spinner from '../../components/layout/Spinner'

export const Students = () => {
    const { getStudents, students, loading,deletelStudent } = useContext(studentApi)
    useEffect(() =>{
        getStudents()
    },[])
 
    const delStudent = (id) =>{
        deletelStudent(id)
    }

    return loading ? <Spinner /> : (
        <div>
            <div className="heading">
               <h2>Students List</h2>
            </div>
            <div className="link-btn">
                <Link to="/addStudent" className="link-button">Add Student</Link>
            </div>
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
            <tbody key ={student._id}>
            <tr>
              <td>{student.sId}</td>
              <td>{student.name}</td>
              <td>{student.sYear}</td>
              <td><button onClick={() => delStudent(student._id)}>Delete</button></td>
           </tr>
           </tbody>
             )}
            </table>
        </div>
    )
}
