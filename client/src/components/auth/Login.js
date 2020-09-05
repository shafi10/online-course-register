import React,{useContext, useState} from 'react'
import {Redirect} from 'react-router-dom'
import {LoginApi} from '../../contextApi/auth/LoginContext'

export const Login = () => {
    const {login, isAuthenticated } = useContext(LoginApi)
   
    const [formData, setFormData ] = useState({
        email:'',
        password:''
    });
     
    const {email , password} = formData
   const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});
   const onSubmit = async e => {
       e.preventDefault();
       let user = {email, password}
          login(user)
   }


      //redirect if logged in

      if(isAuthenticated){
        return <Redirect to='/dashboard' />
      }

    return (
        <div>
            <div className="heading">
                <h2>Login Into The System</h2>
            </div>
            <form className="login" onSubmit = {e => onSubmit(e)}>
            <input type="email" placeholder="Email" name="email" value = {email}
              onChange = {e => onChange(e)} />
             <input type="password" placeholder="Password" name="password" value = {password}
                onChange = {e => onChange(e)} />
             <button>Login</button>
            </form>
        </div>
    )
}
