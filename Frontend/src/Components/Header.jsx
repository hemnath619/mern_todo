import React from 'react';
import {useState,useEffect} from 'react';
 import './header.css';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast"



function Header() {

  const [user,setUser] = useState()

  const nav = useNavigate();

  useEffect(() => { getuserinfo();},[]);

  const getuserinfo = ()=>
  {
    const userinfo = localStorage.getItem('user');
    console.log(userinfo)
    if (userinfo) 
    {setUser(userinfo);}
  }


  const inputHandler = (e)=>
  {
     e.preventDefault();
     toast.success("Logged out")
     localStorage.clear(); nav("/");
     setUser("");
  }
  return (<>

    <div className='box'>
    {user ?  <div className='head'><h3>Hi,{user}</h3></div>: <div className='head'><h3>TODO APP</h3></div>}
    {user ?  <div className='logout'><button className='lgbtn' onClick={inputHandler}>Logout</button></div>: <div></div>}
     
    </div>
  </>)
}

export default Header;