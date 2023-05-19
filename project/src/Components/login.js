import './App.css';
 import './login.css';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
 import axios from 'axios';
// //import bootstrap from 'bootstrap';
import Button from '@mui/material/Button';
import React, { useEffect, useState, toast, Component } from "react"; 
import {Routes,Route} from 'react-router'
import { useNavigate } from "react-router-dom"


class App extends Component {
  render() {
    return (
       <Routes>
           <div className="App">
           
           <Route path='/Dashboard' element={<Dashboard/>} />

           </div>
       </Routes>
   );
  }
}


const Login = ({ setLoginUser}) => {

  // const history = useHistory()
  const navigate = useNavigate();
  
  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange1 = e => {
      // const { name, value } = e.target
      setUser({
          ...user,
          email: e.target.value
      })
  }

  const handleChange2 = e => {

    setUser({
        ...user,
        password: e.target.value
    })
}

  const login = (e) => { 
    e.preventDefault();
    console.log(user)
      axios.post("http://localhost:8080/api/v1/login", user)
      .then(res => {
          console.log(res)
          setUser(res.data.user)  
          navigate('/Dashboard');
      }).catch(error => {
        console.log(error);
      })   
  }

  return (

<div className="container-fluid" id="login">
         <div className="row">
             <div className="col-12 col-sm-6 col-md-3">

         <form className="login-form" onSubmit={login}>
            <div className="mb-3">
              <label htmlFor="inputPhone" className="form-label">Email Id</label>
              <input type="text" className="form-control" id="inputPhone" aria-describedby="emailHelp" onChange={handleChange1} placeholder="Enter your Email" required></input>

             </div>
             <div className="mb-3">
             <label htmlFor="loginPassword" className="form-label">Password</label>
               <input type="password"  className="form-control" id="loginPassword" onChange={handleChange2} placeholder="Enter your Password" required></input>

             </div>
             <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
              <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
             </div>
         
              <button type="submit" className="btn btn-primary login-button">
                 Login
              </button> 
          
             
           </form>
         </div>
     </div>
     </div>
  );
}

export default Login;