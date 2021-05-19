import React from 'react'
import {Redirect} from 'react-router-dom';
import logo from '../logo.png'
import '../style/start.css'
const startScreen = () => {
    return (
        <div class="splash">            
            <img src={logo} alt="logo" class="logo"></img>
            <button class="start" onClick={()=>{
                 window.location.replace("./login-form.jsx")
            }}>start</button>
        </div>
        
    )
}

export default startScreen
