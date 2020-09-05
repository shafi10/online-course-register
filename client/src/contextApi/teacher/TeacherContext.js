import React,{createContext, useReducer} from 'react'
import teacherReducer from './teacherReducer'
import axios from 'axios'

const initialState = {
    teachers:[],
    loading:true,
    error:null,
    singleTeacher:null
}

export const TeacherApi = createContext(initialState)

export const GlobalTeacher =({children}) =>{

    const [state, dispatch] = useReducer(teacherReducer, initialState)

    async function getTeacher(){
        try {
            const {data} = await axios.get('/teacher')
            dispatch({
                type:'GET_TEACHER',
                payload:data
            })
        } catch (error) {
          dispatch({
              type:'TEACHER_ERROR',
              payload:error
          })            
        }
    }

    async function postTeacher(newTeacher){
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        try {
            const {data} = await axios.post('/teacher',newTeacher, config)
            dispatch({
                type:'POST_STUDENT',
                payload:data
            })
        } catch (error) {
            dispatch({
                type:'TEACHER_ERROR',
                payload:error
            })      
        }
    }

    async function deleteTeacher(id){
        try {
            await axios.delete('/teacher/'+id)
            dispatch({
                type:'DEL_TEACHER',
                payload:id
            })
        } catch (error) {
            dispatch({
                type:'TEACHER_ERROR',
                payload:error
            }) 
        }
    }

   return(
      <TeacherApi.Provider value={{
        getTeacher,
        teachers:state.teachers,
        loading:state.loading,
        postTeacher,
        deleteTeacher
      }}>
          {children}
      </TeacherApi.Provider>
   )
}