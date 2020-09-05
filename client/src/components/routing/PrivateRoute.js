import React,{useContext, useEffect} from 'react'
import { Route, Redirect } from 'react-router-dom'
import {LoginApi} from '../../contextApi/auth/LoginContext'


const PrivateRoute = ({component:Component, ...rest}) =>{
     const {isAuthenticated, loading, loadUser} = useContext(LoginApi)
     useEffect(() =>{
        loadUser()
     },[])
    return(
        <Route {...rest} render={props => !isAuthenticated && !loading ? (<Redirect to='/login' />): (<Component {...props} />)} /> 
    )
  
}
export default PrivateRoute