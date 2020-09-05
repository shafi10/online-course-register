import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Navbar} from './components/layout/Navbar'
import {Landing} from './components/layout/Landing'
import {Login} from './components/auth/Login'
import {GobalLogin} from './contextApi/auth/LoginContext'
import {GlobalStudent} from './contextApi/student/StudentContext'
import {GlobalTeacher } from './contextApi/teacher/TeacherContext'
import setAuthToken from './utils/setAuthToken'
import {Students} from './components/students/Students'
import {AddStudent} from './components/students/AddStudent'
import { Manubar } from './components/layout/Manubar'
import { Teachers } from './components/teacher/Teachers'
import {AddTeacher } from './components/teacher/AddTeacher'
import {GlobalCourse } from './contextApi/course/CourseContext'
import {Courses} from './components/course/Courses'
import { SingleCourse } from './components/course/SingleCourse'
import {AddCourse} from './components/course/AddCourse'
import PrivateRoute from './components/routing/PrivateRoute'

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() { 
  return (
    <GlobalCourse>
    <GlobalTeacher>
    <GlobalStudent>
    <GobalLogin>
    <div className="App">
      <Router>
       <Navbar />
       <Route exact path='/' component={Landing} />
       <div className="container">
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/student" component={Students} />
          <PrivateRoute exact path="/addStudent" component={AddStudent} />
          <PrivateRoute exact path='/dashboard' component={Manubar} />
          <PrivateRoute exact path='/teacher' component={Teachers} />
          <PrivateRoute exact path='/addTeacher' component={AddTeacher} />
          <PrivateRoute exact path='/course' component={Courses} />
          <PrivateRoute exact path='/addCourse' component={AddCourse} />
          <PrivateRoute exact path='/singleCourse/:id' component={SingleCourse} />
        </Switch>
        </div>
      </Router>
    </div>
    </GobalLogin>
    </GlobalStudent>
    </GlobalTeacher>
    </GlobalCourse>
  );
}

export default App;
