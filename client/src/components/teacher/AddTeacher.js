import React,{useState, useContext} from 'react'
import { TeacherApi } from '../../contextApi/teacher/TeacherContext'

export const AddTeacher = () => {
       const { postTeacher  } = useContext(TeacherApi)
    const [formData, setformData] = useState({
        tId:'',
        name:''
    })
    const {tId,name} = formData
    const onChange = (e) => setformData({...formData, [e.target.name]:e.target.value})
    const onSubmit = async (e) => {
        e.preventDefault();
        let newTeacher ={
            tId,name
        }
        postTeacher(newTeacher)
    }
    return (
        <div>
            <div className="heading">
                <h2>Add New Teacher</h2>
            </div>
            <form className="login" onSubmit = {e => onSubmit(e)}>
            <input type="text" placeholder="Teacher Id" name="tId" value = {tId}
              onChange = {e => onChange(e)} />
             <input type="text" placeholder="Teacher Name" name="name" value = {name}
                onChange = {e => onChange(e)} />
             <button>Submit</button>
            </form>
        </div>
    )
}
