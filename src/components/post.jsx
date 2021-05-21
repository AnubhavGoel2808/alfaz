import React ,{Component, useEffect} from 'react'
import Like from './common/like'
import { Link, Redirect } from "react-router-dom";
import '../style/POST.css';
import Profile from './Profile'
import { useHistory } from "react-router-dom";
import auth from '../firebase';
 class Post extends Component{
    constructor(props){
        super(props);
        
            const {nameData}=props;
            const {postnumber}=props;
            
        this.state={
            name:"",
            src:"",
            postIndex:postnumber,
            play:false

        }
       
        console.log("11");
        console.log(this.state);
        
    }   
    audio = new Audio()
    handleImageClick = (e) => {
       
       if(!this.props.callingSelf )
       window.open("/profile?name="+this.props.nameData,"_self"); 
        
      }
     togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
          this.state.play ? this.audio.play() : this.audio.pause();
        });
        this.audio.loop=false;
      }
      render(){
          console.log("12")
        //   if(this.state.src==undefined)
        //     return null
        this.audio.src=this.props.audioUrl
      console.log("post rendered")
      console.log(this.state)
        return (
            
            
            <div class="post">
            <div class="mainmedia">
                <button class="playpause" onClick={this.togglePlay}>{this.state.play ? 'sound off' : 'sound on'}</button>
            <div class="container-audio" onClick={this.handleImageClick}>
            <div class="media">
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--skK8N6A8--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/511082/2860c4df-a0f4-4f4f-acb2-5e8bdb3bc673.jpg" className="avatar" 
                
            >
             </img>
            <div class="check">
           
            <p>{this.props.nameData}</p>
            <p>this is sample </p>
             </div>
           {/* // <audio src="https://www.computerhope.com/jargon/m/example.mp3" id="player" loop controls ></audio> */}
            
                <div class="animate">
                <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        <div class="colum1">
            <div class="row"></div>
        </div>
        </div>
        
           </div>
            
        </div>
        <Like></Like>
        
        
        {/* <button class="like-btn"> Like </button> */}
        </div>
        </div>
        )
    }
}

export default Post
