import React,{createContext, useReducer} from 'react'
import StudentReducer from './StudentReducer'
import axios from 'axios'

const initialState = {
    students:[],
    loading:true,
    error:null,
    singleStudent:null

}

export const studentApi = createContext(initialState)


export const GlobalStudent = ({children} ) =>{
      
   const [state, dispatch] = useReducer(StudentReducer, initialState)

     async function getStudents(){
         try {
             const {data} = await axios.get('/student')
             dispatch({
                 type:'GET_STUDENT',
                 payload:data
             })
         } catch (error) {
             dispatch({
                 type:'STUDENT_ERROR',
                 payload:error
             })
         }
     }

     async function postStudent(newstudent){
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        try {
            const {data} = await axios.post('/student',newstudent, config)
            dispatch({
                type:'ADD_STUDENT',
                payload:data
            })
        } catch (error) {
            dispatch({
                type:'STUDENT_ERROR',
                payload:error
            })       
        }
     }
  
     async function deletelStudent(id){
         try {
             await axios.delete('/student/'+id)
             dispatch({
                 type:'DEL_STUDENT',
                 payload:id
             })
         } catch (error) {
            dispatch({
                type:'STUDENT_ERROR',
                payload:error
            })
         }
     }

    return (
        <studentApi.Provider value={{
            getStudents,
            students: state.students,
            loading:state.loading,
            postStudent,deletelStudent
        }}>
            {children}
        </studentApi.Provider>
    )
}