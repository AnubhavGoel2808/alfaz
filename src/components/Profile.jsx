import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import firebase from "firebase";
import auth,{ db } from "../firebase";
import '../style/profile.css'
import FigureCaption from 'react-bootstrap/esm/FigureCaption';
import Post from './post'
import Popup from './popup'
import CommentBox from './comments'
import logo from '../logo.png'
class Profile extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {
      isOpen:false,
      isUser:false,
      alreadyFollow:false,
      displayName:"" ,
      audio:[],
      // audio: [{ src:"https://www.computerhope.com/jargon/m/example.mp3", description:"this is a smaple audio"}
      //         ,{ src:"https://www.computerhope.com/jargon/m/example.mp3", description:"this is a smaple audio"},],
      userDetails: {
          image:'https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png'
         },
      users:[],

    }
    console.log(auth)
  } 
 
    
     componentDidMount() {
     
      var url_string = window.location;
      var url = new URL(url_string);
      var name = url.searchParams.get("name");
      if(name!=null){
      db.collection("user").where("handle","==","sal_vat_tion")
      .get().then(querySnapshot => {
        querySnapshot.forEach((doc)=>{
          this.setState({
            name: doc.data().name,
            handle:doc.data().handle,
            follower:doc.data().followers_count,
            following:doc.data().following_count,
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--skK8N6A8--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/511082/2860c4df-a0f4-4f4f-acb2-5e8bdb3bc673.jpg",
          })
        })
        
        console.log("4");
       
         })
      }
      else{
        // if(auth.currentUser==null){
        //   auth.signOut().then(()=>
        //   window.location.replace('/start?sessionexpire=true'))
        // }
      //   console.log(auth.currentUser)
      //   console.log(auth.currentUser)
      //  let user=auth.currentUser.displayName
        
        db.collection("user").where("name","==","anubhav goel")
      .get().then(querySnapshot => {
        querySnapshot.forEach((doc)=>{
          this.setState({
            name: doc.data().name,
            handle:doc.data().handle,
            follower:doc.data().followers_count,
            following:doc.data().following_count,
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--skK8N6A8--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/511082/2860c4df-a0f4-4f4f-acb2-5e8bdb3bc673.jpg",
          })
        })
        
        console.log("4");
       
         })
      }
         const temp = [];
         //console.log(temp);  
         if(name!=null){
         db.collection("post").where("handle", "==", name)
         .onSnapshot((querySnapshot) => {
             querySnapshot.forEach((doc) => {
               this.setState({
                audio:[...this.state.audio, {
                  url:doc.data().audio,
                  des:doc.data().description
                }],
               })
             });
         });
         
         console.log(temp);
         }
         else{
          
           const id=auth.uid
           db.collection("post").where("handle", "==", "sal_vat_tion")
         .onSnapshot((querySnapshot) => {
             querySnapshot.forEach((doc) => {
               console.log(doc.data())
               this.setState({
                audio:[...this.state.audio, {
                  url:doc.data().audio,
                  des:doc.data().description
                }],
               })
             });
         });
         }
         
         if(name != null ){
         // console.log(auth.currentUser.displayName)
          
            this.setState({
              isUser:false
            })
         }
         else{
          
          this.setState({
            isUser:true
          })
         }
      }
    
      handleSignout = async () => {
        try {
          auth
          .signOut()
          .then(() => window.location.replace("./start"));
        } catch (error) {
          console.log(error)
        }
      }
       togglePopup = () => {
        this.setState({isOpen: !this.state.isOpen})
      }

    render() {
     
        // if(this.state.name== undefined || this.state.audio == null )
        //       return null
        
        return (

          <div className='main'>
            <img src={logo} style={{
              objectFit:"cover",
              width:"100px",
              height:"100px"
            }}></img>
            <section className='intro'>
            <div>
                  
                  <h1>@{this.state.handle}</h1>
                  
                    <button style={{
                      display:(this.state.isUser ? "none" : "inline" )
                    }}class={!this.state.alreadyFollow?"followToggle":"unfollow"} onClick={(e)=>{
                        //{this.state.alreadyFollow ? alert('Are YOu sure?'):alert("you started following") }
                        this.setState({
                          alreadyFollow: !this.state.alreadyFollow,
                          
                        })
                        
                    }}>{this.state.alreadyFollow ? 'Unfollow' : 'Follow'}</button>
                  
            </div>

            <figure>
              
            <img src={this.state.image} className='avatar' alt={this.state.userDetails.name} >
             </img>
             <figcaption className="figure-caption text-center" class="caption">
                {this.state.name}
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
                  <li>{this.state.follower}</li>
                </ul>
                
                <ul>
                  <li>following</li>
                  <li>{this.state.following}</li>
                </ul>
                
                </div>
                <div class="options" styles={{
                 display:(this.state.isUser ? "flex" : "none" )
                }}>
                 <button class='btn' style={{
                   color:'cyan',
                 display:(this.state.isUser ? "flex" : "none" )
                }} 
                onClick={this.togglePopup}>Edit</button>   
                 {  
                          this.state.isOpen && <Popup content={<>
                          
                           <h2>Feature loading soon...</h2>
                           </>}
      handleClose={this.togglePopup}
    />}
             <button class='btn' onClick={this.handleSignout} style={{
                   color:'cyan',
                 display:(this.state.isUser ? "flex" : "none" )
                }} >Logout</button>
             </div>
            
             </section>
             <div >
               {this.state.audio.map((data)=>(
               <div className='posts'>
                 <br></br>
                <Post nameData={this.state.handle} audioUrl={data.url} description={data.des} callingSelf="true"></Post><br></br>
               </div>
               ))} 
    </div>
         </div>
           
        
        )
      }
}

export default Profile
