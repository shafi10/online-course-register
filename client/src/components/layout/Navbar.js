import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {LoginApi} from '../../contextApi/auth/LoginContext'

export const Navbar = () => {
    const { isAuthenticated, logout, loadUser} = useContext(LoginApi)
    useEffect(()=>{
        if(localStorage.token){
            loadUser()
        }
      },[])

    return (
        <div className="navbar">
            <div className="logo">
                <h3>
                <Link className="link" to="/">Online Course Registration</Link>
                </h3>
            </div>
            <div className="nav">
                <ul>{isAuthenticated ?<> <li><Link className="link" to="#" onClick={logout} >Logout</Link></li>
                                      <li><Link className="link" to="/dashboard" >Dashborad</Link></li> </>:
                    <li><Link className="link" to="/login">Login</Link></li> }
                </ul>
            </div>
        </div>
    )
}
