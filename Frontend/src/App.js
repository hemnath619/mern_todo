import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Todo from './Components/Todo';
import './app.css';
import bgvideo from "./assets/bgvideo8.mp4";
import { Toaster } from 'react-hot-toast';


 

export default function App() {

    return (<>
    <div className='maincontainer'>

        <video className='videoTag' autoPlay loop muted>
         <source src={bgvideo} type='video/mp4' />
        </video>

     <header className='headerdiv'><Header/></header>  

     <content className="contentdiv"> 
        <Routes>
        <Route exact path="/" element={ <Home/> }/>  
        <Route exact path="/todo" element={ <Todo/>}/>
        </Routes>
    </content>
    <footer className='footerdiv'><Footer/></footer> 

    <Toaster   position="top-center"/>
    </div> 
    </>)
}


