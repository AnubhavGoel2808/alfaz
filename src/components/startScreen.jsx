import React from 'react'
import {Redirect} from 'react-router-dom';
import logo from '../logo.png'
import '../style/start.css'
const startScreen = (props) => {
    return (
        <div class="splash">            
            <img src={logo} alt="logo" class="logo"></img>
            <button class="start" onClick={()=>{
                 props.history.push("/login");
            }}>start</button>
        </div>
        
    )
}

export default startScreen
