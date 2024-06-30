import React from 'react';
import './footer.css'
import insta from '../assets/instagram.png'
import twit from'../assets/twitter.png';
import fb from'../assets/facebook.png';
import git from'../assets/git.png';
import tel from'../assets/telegram.png';
import wha from'../assets/whatsapp.png';

function Footer() {


  return (<>
    <div className='footbox'>

      <div className="text"><span >@Copyright 2023. All Rights Reserved.Designed & coded by Hemnath</span></div>

      <div className='icons'>
       <div className='git'><img src={git} alt="Github"/></div>
        <div className='insta'><img src={insta} alt="instagram"/></div>
        <div className='twit'><img src={twit} alt="twitter"/></div>
        <div className='fb'><img src={fb} alt="facebook"/></div>
        <div className='tel'><img src={tel} alt="telegram"/></div>
        <div className='wha'><img src={wha} alt="whatsapp"/></div>
      </div>

    </div>
    </>)
}

export default Footer;