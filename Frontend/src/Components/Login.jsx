import React, { useState } from 'react';
import './login.css';
import p from '../assets/person.png';
import e from '../assets/email.png';
import pa from '../assets/password.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";


function Login() {

    const[action, setAction] = useState("Login");

    const[loginData,setLoginData]=useState({name:"",password:""});
    const[signupData,setSignupData]=useState({name:"",email:"",password:""});
   
    
 const nav = useNavigate();

    const onSubmitLogin = async(e) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:4000/login-data",loginData)
                console.log(res.data.data);
                if(res.data.success === true)
                { 
                  localStorage.setItem('token', res.data.token);
                  localStorage.setItem('user', res.data.user);
                  setLoginData({name:"",password:""});
                  toast.success(res.data.message)
                  nav("/todo");
                  window.location.reload();
                }
                else{toast.error(res.data.message)}
             }
          catch (error) {console.log(error)}}
         

    const onSubmitSignup = async(e) => {
      e.preventDefault();
      try {
           const res = await axios.post("http://localhost:4000/signup-data",signupData)
           console.log(res.data.data);
           setSignupData({name:"",email:"",password:""});
           if(res.data.success === true)
           { 
            toast.success(res.data.message)
            setAction("Login")
           }
           else{toast.error(res.data.message)}}

       catch (error) {console.log(error)}
      }

      
    const inputsHandlerLogin = (e) => {setLoginData((loginData) => ({...loginData,[e.target.name]: e.target.value,}))};
    const inputsHandlerSignup = (e) => {setSignupData((signupData) => ({...signupData,[e.target.name]: e.target.value,}))};
   
    return (<>
    <div className="container">

        <div className="header">

            <div className='submit-container'>
                 <div className={action === "Signup" ? "submit gray" : "submit"} 
                      onClick={() => { setAction("Login") }}>
                        Login
                  </div>
                <div className={action === "Login" ? "submit gray" : "submit"} 
                onClick={() => { setAction("Signup") }}>
                  SignUp
                </div>
            </div>

         </div>


        <div className="inputs">

            {action === "Login" ? 
            <div></div> : 
            <div className='input'>
                <img src={e} alt=" Email" />
                <input type='email' 
                placeholder='Email' 
                onChange={action === "Login" ? inputsHandlerLogin:inputsHandlerSignup} 
                name="email" 
                value={action === "Login" ? loginData.email:signupData.email}/>
              </div>}

             <div className='input'> 
               <img src={p} alt=" UserName" />
               <input type='text' 
                placeholder='Name' 
                onChange={action === "Login" ? inputsHandlerLogin:inputsHandlerSignup} 
                name="name" 
                value={action === "Login" ? loginData.name:signupData.name}/>
             </div>

             <div className='input'> 
                  <img src={pa} alt="password" />
                  <input type='password' 
                  placeholder='Pasword' 
                  onChange={action === "Login" ? inputsHandlerLogin:inputsHandlerSignup}  
                  name="password" value={action === "Login" ? loginData.password:signupData.password}/>
             </div>


             {action === "Login" ?  
             <div>
              <Link to="/todo">
                <button className='login' onClick={onSubmitLogin}>Login</button>
                </Link>
                <div className='info-container'>
                  <span className='info'>Don't have an Account,SignUp</span>
                </div>
              </div> : <div></div>}
                
             {action === "Signup" ? 
             <div>
                <button className='signup' onClick={onSubmitSignup}>SignUp</button> 
                  <div className='info-container'>
                    <span className='info'>If already Signedup Please Login</span>
                  </div>
              </div> : <div></div>}
     </div>
 </div>

    </>)
}
export default Login;
