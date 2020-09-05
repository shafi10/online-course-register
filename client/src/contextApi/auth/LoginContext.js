import React,{createContext, useReducer} from 'react'
import axios from 'axios'
import LoginReducer from './LoginReducer'
import setAuthToken from '../../utils/setAuthToken' 

const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated: null,
    loading : true,
    user:null
}

export const LoginApi = createContext(initialState)

export const GobalLogin = ({children}) =>{
    const [state, dispatch] = useReducer(LoginReducer, initialState)
   
      async function login(user){
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
  
        try {
            const {data} = await axios.post('/user', user ,config)
       
            dispatch({
                type:'POST_LOGIN',
                payload:data
            })
    
        } catch (error) {
            dispatch({
                type:'AUTH_ERROR'
            })
        }
       
      }

      function logout(){
          dispatch({
              type:'LOGOUT'
          })
      }

      async function loadUser(){
        if(localStorage.token){
            setAuthToken(localStorage.token)
        }
       
        try {
            const {data} = await axios.get('/user');
            dispatch({
                type:'USER_LODED',
                payload:data
            })
        } catch (error) {
            dispatch({
                type:'AUTH_ERROR'
            })
        }
      }
   
    return(
       <LoginApi.Provider value={{
            login,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            logout,loadUser,
            user: state.user
       }}>
           {children}
       </LoginApi.Provider>
    )
}