import React from 'react'
import {Link } from 'react-router-dom'

export const Manubar = () => {
    return (
        <div>
        <div className="sidebar">

            <header>Menu List</header>
            <ul>
                <li><Link className="sLink" to="/"><i className="fa fa-link"></i>Home</Link></li>
                <li><Link className="sLink" to="/student"><i className="fa fa-link"></i>Student</Link></li>
                <li><Link className="sLink" to="/teacher"><i className="fa fa-link"></i>Teacher</Link></li>
                <li><Link className="sLink" to="/course"><i className="fa fa-link"></i>Course</Link></li>
                <li><Link className="sLink" to="/addStudent"><i className="fa fa-link"></i>Add Student</Link></li>
                <li><Link className="sLink" to="/addCourse"><i className="fa fa-link"></i>Add course</Link></li>
                <li><Link className="sLink" to="/addTeacher"><i className="fa fa-link"></i>Add Teacher</Link></li>
            </ul>
        </div>
          <section className="side-img">
               <p>Welcome to Admin Dashboard</p>
          </section>
        </div>
    )
}
