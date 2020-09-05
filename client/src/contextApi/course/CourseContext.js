import React,{ createContext,useReducer } from 'react'
import CourseReducer from './CourseReducer'
import axios from 'axios'

const initialState = {
    courses:[],
    loading:true,
    singleCourse:null,
    error:null
}


export const CourseApi = createContext(initialState)

export const GlobalCourse = ({children}) =>{
    const [state, dispatch] = useReducer(CourseReducer, initialState)

     async function getCourse(){
         try {
             const {data} = await axios.get('/course')
             dispatch({
                 type:'GET_COURSE',
                 payload:data
             })
         } catch (error) {
            dispatch({
                type:'COURSE_ERROR',
                payload:error
            })             
         }
     }

      async function getSingleCourse(id){
         try {
             const {data}  = await axios.get('/course/single/'+id)
             dispatch({
                 type:'SINGLE_COURSE',
                 payload:data
             })
         } catch (error) {
            dispatch({
                type:'COURSE_ERROR',
                payload:error
            }) 
         }
      }

      async function regiStudent(newRegi){
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        try {
            const {data} = await axios.put('/course/student',newRegi, config)
            dispatch({
                type:'REGI_STUDENT',
                payload:data
            })
        } catch (error) {
            dispatch({
                type:'COURSE_ERROR',
                payload:error
            })       
        }
      }

      async function regiTeacher(newRegi){
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        try {
            const {data} = await axios.put('/course/teacher',newRegi, config)
            dispatch({
                type:'REGI_TEACHER',
                payload:data
            })
        } catch (error) {
            dispatch({
                type:'COURSE_ERROR',
                payload:error
            })       
        }
      }
   
      async function addCourse(newCourse){
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        try {
             await axios.post('/course',newCourse, config)
            dispatch({
                type:'ADD_COURSE'
            })
        } catch (error) {
            dispatch({
                type:'COURSE_ERROR',
                payload:error
            })       
        }
      }

      async function deleteStudent(delStu){
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        try {
            await axios.post('/course/stu/del',delStu, config)
            dispatch({
                type:'DEL_STU',
                payload:delStu.id
            })
        } catch (error) {
            dispatch({
                type:'COURSE_ERROR',
                payload:error
            })       
        }
      }
      async function deleteTeacher(id, techId){
        try {
            await axios.delete(`/course/tec/${id}/${techId}`)
            dispatch({
                type:'DEL_TEC',
                payload:techId
            })
        } catch (error) {
            dispatch({
                type:'COURSE_ERROR',
                payload:error
            })       
        }
      }

      async function deleteCourse(id){
        try {
            await axios.delete(`/course/${id}`)
            dispatch({
                type:'DEL_COUR',
                payload:id
            })
        } catch (error) {
            dispatch({
                type:'COURSE_ERROR',
                payload:error
            })       
        }
      }
       
    return (
        <CourseApi.Provider value={{
            getCourse,
            courses:state.courses,
            getSingleCourse,
            singleCourse:state.singleCourse,
            regiStudent,
            regiTeacher,
            addCourse,
            deleteStudent,
            deleteTeacher,
            loading:state.loading,
            deleteCourse
        }}>
            {children}
        </CourseApi.Provider>
     
    )
}

