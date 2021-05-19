import React ,{Component, useEffect} from 'react'
import Like from './like'
import '../style/POST.css';
 class Post extends Component{
    constructor(props){
        super(props);
        
        this.state={
            name:props.nameData,
            src:props.audioUrl,
            play:false
        }
        console.log(this.state)
    
    }  
    

     audio = new Audio('https://www.computerhope.com/jargon/m/example.mp3')
    
     togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
          this.state.play ? this.audio.play() : this.audio.pause();
        });
        this.audio.loop=true;
      }
      render(){

      
        return (
      
       
            <div class="post">
            <div class="mainmedia">
                <button class="playpause" onClick={this.togglePlay}>{this.state.play ? 'sound off' : 'sound on'}</button>
            <div class="container-audio">
            <div class="media">
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--skK8N6A8--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/511082/2860c4df-a0f4-4f4f-acb2-5e8bdb3bc673.jpg" className="avatar" >
             </img>
            <div class="check">
           
            <p>{this.state.name}</p>
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
