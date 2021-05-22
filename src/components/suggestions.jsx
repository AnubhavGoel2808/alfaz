import React from 'react'
import { Component } from 'react';
import {db} from '../firebase'
import User from './User'
class Suggestion extends Component{
   constructor(props){
       super(props)
       this.state={
           data:[],
           isOpen:true
       }
   }

   componentDidMount(){
    db.collection("user")
    .get().then(querySnapshot => {
      querySnapshot.forEach((doc)=>{
        this.setState({
          data:[...this.state.data,{name: doc.data().name,
          handle:doc.data().handle,
          follower:doc.data().followers_count,
          following:doc.data().following_count,
          image: "https://res.cloudinary.com/practicaldev/image/fetch/s--skK8N6A8--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/511082/2860c4df-a0f4-4f4f-acb2-5e8bdb3bc673.jpg",
        }]})
      })
     })
   }
   toggleSuggestion = () => {
    this.setState({isOpen: !this.state.isOpen})
  }
   render(){
       return(
           <div style={{
               display:(this.state.isOpen ? "inline" : "none")
           }} >
               <div style={{
                   display:"flex",
                   justifyContent:"space-between"
               }}>
               <p>Other Users</p>
               <button class="report" onClick={this.toggleSuggestion}>X</button>
               </div>
           <div class="listing" style={{
               display:"flex",
               justifyContent:"space-between"
               
           }}>
                                 {
                       this.state.data.map((display)=>(
                        <User name={display.name} image={display.image} handle={display.handle}></User>
                 ))}
               
           </div>
                    
           </div>
       )
   }
}
export default Suggestion;