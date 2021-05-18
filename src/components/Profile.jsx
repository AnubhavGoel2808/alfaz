import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import firebase from "firebase";
import { auth ,db } from "../firebase";
import '../style/profile.css'
import FigureCaption from 'react-bootstrap/esm/FigureCaption';
import Post from './post'
import Popup from './popup'
class Profile extends React.Component{
    state = {
        isOpen:false,
        isUser:false,
        alreadyFollow:false,
        audio: [{ src:"https://www.computerhope.com/jargon/m/example.mp3", description:"this is a smaple audio"}
        ,{ src:"https://www.computerhope.com/jargon/m/example.mp3", description:"this is a smaple audio"},
        { src:"https://www.computerhope.com/jargon/m/example.mp3", description:"this is a smaple audio"}],
        userDetails: {
           
            image:'https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png'
           }
      }
    
      componentWillMount() {
        this.fetchUserDetails()
        this.fetchPosts()
      }
    
      fetchPosts = async () => {
        const temp=[...this.state.audio];
        db.collection("post").where("handle", "==", "sal_vat_ion")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              
              temp.push({
                src:"https://www.computerhope.com/jargon/m/example.mp3",
                description:doc.data().description
              })
              
              console.log(temp);
              this.setState({
                audio:temp,
              })
            });
        });
        console.log("arr");        
        console.log(this.state);
      }
      fetchUserDetails = async () => {
        db.collection("user").where("email", "==", "xyz@gmail.com")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.setState({name:doc.data().name});
                this.state.userDetails.followers=doc.data().followers_count;
                this.state.userDetails.following=(doc.data().following_count);
                this.state.userDetails.email=(doc.data().email);
                this.state.userDetails.name=doc.data().name;
                this.state.userDetails.handle=doc.data().handle;
            });
        });
    
      }
      handleSignout = async () => {
        try {
          auth
          .signOut()
          .then(() => window.location.replace("./login-form.jsx"));
        } catch (error) {
          console.log(error)
        }
      }
       togglePopup = () => {
        this.setState({isOpen: !this.state.isOpen})
      }

    render() {
      this.fetchUserDetails();

        const { audio, userDetails } = this.state
       
        return (
          <div className='main'>
            <section className='intro'>
            <div>
                  <h1>{this.state.userDetails.handle}</h1>
                  
                    <button class={!this.state.alreadyFollow?"followToggle":"unfollow"} onClick={(e)=>{
                        //{this.state.alreadyFollow ? alert('Are YOu sure?'):alert("you started following") }
                        this.setState({
                          alreadyFollow: !this.state.alreadyFollow,
                          
                        })
                        
                    }}>{this.state.alreadyFollow ? 'Unfollow' : 'Follow'}</button>
            </div>

            <figure>
              
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--skK8N6A8--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/511082/2860c4df-a0f4-4f4f-acb2-5e8bdb3bc673.jpg" className='avatar' alt={this.state.userDetails.name} >
             </img>
             <figcaption className="figure-caption text-center" class="caption">
                {this.state.userDetails.name}
              </figcaption>
             
             </figure>
             </section>
            <section className='card1' >
              <div class="prp">
                <ul>
                  <li>post</li>
                  <li>{this.state.audio.length}</li>
                </ul>
                
                <ul>
                  <li>followers</li>
                  <li>{this.state.userDetails.followers}</li>
                </ul>
                
                <ul>
                  <li>following</li>
                  <li>{this.state.userDetails.following}</li>
                </ul>
                </div>
                <div class="options">
                 <button class='btn' style={{color:'cyan'}} onClick={this.togglePopup}>Edit</button>   
                 {this.state.isOpen && <Popup content={<>
                          <b>Edit Details</b>
                         <form class="EditForm">
                           <input type="text" placeholder="name"></input><br></br>
                           <input type="text" placeholder="name"></input><br></br>
                           <input type="text" placeholder="name"></input><br></br>
                           <input type="text" placeholder="name"></input><br></br>
                           <input type="submit"></input>
                         </form>
                         
                           </>}
      handleClose={this.togglePopup}
    />}
             <button class='btn' onClick={this.handleSignout} style={{color:'cyan'}}>Logout</button>
             </div>
            
             </section>
             <div >
               <div className='posts'>
                <Post nameData={this.state.userDetails.name}></Post>
                <Post nameData="abc"></Post>
                <Post nameData="abc"></Post>
                <Post nameData="abc"></Post>
               </div>
   

         
          </div>
                </div>
           
        
        )
      }
}

export default Profile
