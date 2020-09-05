import React,{useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {CourseApi} from '../../contextApi/course/CourseContext'
import Spinner from '../layout/Spinner'

export const Courses = () => {
    const { getCourse, courses, loading , deleteCourse} = useContext(CourseApi)
    useEffect(() =>{
        getCourse()
    },[])

     const delCourse =(id) =>{
        deleteCourse(id)
     }
    return loading ? <Spinner /> : ( 
        <div>
            <div className="heading">
               <h2>Courses List</h2>
            </div>
            <div className="link-btn">
                <Link to="/addCourse" className="link-button">Add Course</Link>
            </div>
            <table id="tables">
             <tr>
                <th>Course Name</th>
                <th>Category</th>
                <th>Year</th>
                <th>Details</th>
                <th>Action</th>
            </tr>
            { courses.map(course => 
            <tr>
              <td>{course.name}</td>
              <td>{course.category}</td>
              <td>{course.year}</td>
              <td><Link className="link-button" to={'/singleCourse/'+course._id}>Details</Link></td>
              <td><button onClick={() => delCourse(course._id)}>Delete</button></td>
           </tr>
             )}
  
            </table>
        </div>
    )
}