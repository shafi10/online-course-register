import React,{useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { TeacherApi } from '../../contextApi/teacher/TeacherContext'
import Spinner from '../layout/Spinner'

export const Teachers = () => {
    const {  getTeacher, teachers, loading, deleteTeacher } = useContext(TeacherApi)
    useEffect(() =>{
       getTeacher()
    },[])

    const delTeacher = (id) =>{
        deleteTeacher(id)
    }
    return loading ? <Spinner /> : (
        <div>
            <div className="heading">
               <h2>Teachers List</h2>
            </div>
            <div className="link-btn">
                <Link to="/addTeacher" className="link-button">Add Teacher</Link>
            </div>
            <table id="tables">
            <thead>
             <tr>
                <th>Teacher Id</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
            </thead>
            { teachers && teachers.map(teacher => 
            <tbody key ={teacher._id}>
            <tr>
              <td>{teacher.tId}</td>
              <td>{teacher.name}</td>
              <td><button onClick={ () => delTeacher(teacher._id) }>Delete</button></td>
           </tr>
           </tbody>
             )}
  
            </table>
        </div>
    )
}
