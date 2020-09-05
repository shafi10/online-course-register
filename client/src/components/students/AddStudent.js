import React,{useState, useContext} from 'react'
import {studentApi} from '../../contextApi/student/StudentContext'

export const AddStudent = () => {
       const { postStudent } = useContext(studentApi)
    const [formData, setformData] = useState({
        sId:'',
        name:'',
        sYear:''
    })
    const {sId,name, sYear} = formData
    const onChange = (e) => setformData({...formData, [e.target.name]:e.target.value})
    const onSubmit = async (e) => {
        e.preventDefault();
        let newStudent ={
            sId,name,sYear
        }
        postStudent(newStudent)
    }
    return (
        <div>
            <div className="heading">
                <h2>Add New Student</h2>
            </div>
            <form className="login" onSubmit = {e => onSubmit(e)}>
            <input type="text" placeholder="Student Id" name="sId" value = {sId}
              onChange = {e => onChange(e)} />
             <input type="text" placeholder="Student Name" name="name" value = {name}
                onChange = {e => onChange(e)} />
            <input type="text" placeholder="Student Year" name="sYear" value = {sYear}
                onChange = {e => onChange(e)} />
             <button>Submit</button>
            </form>
        </div>
    )
}
