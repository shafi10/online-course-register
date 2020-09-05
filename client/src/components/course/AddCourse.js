import React,{useContext, useState} from 'react'
import {CourseApi} from '../../contextApi/course/CourseContext'

export const AddCourse = (props) => {
    const {addCourse} = useContext(CourseApi)
    const [formData, setformData] = useState({
        name:'',
        category:'',
        year:''
    })
    const {name, category, year} = formData
    const onChange = (e) => setformData({...formData, [e.target.name]:e.target.value})
    const onSubmit = async (e) => {
        e.preventDefault();
        let newcourse ={
            name, category, year
        }
        addCourse(newcourse)
        props.history.push('/course')
    }
    return (
        <div>
            <div className="heading">
                <h2>Add New Course</h2>
            </div>
            <form className="login" onSubmit = {e => onSubmit(e)}>
            <input type="text" placeholder="Course Name" name="name" value = {name}
              onChange = {e => onChange(e)} />
             <input type="text" placeholder="Course Category" name="category" value = {category}
                onChange = {e => onChange(e)} />
            <input type="text" placeholder="Which year of course" name="year" value = {year}
                onChange = {e => onChange(e)} />
             <button>Submit</button>
            </form>
        </div>
    )
}
