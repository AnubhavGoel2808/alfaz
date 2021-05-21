import React from 'react'
import { Component } from 'react';
import {db} from '../firebase'
import Post from './post'
class Feed extends Component{
  constructor(props){
    super(props)
    this.state={
      audio:[]
    }
  }
  componentDidMount(){
    db.collection("post")
    .get().then(querySnapshot=>(
      querySnapshot.forEach(doc=>(
        this.setState({
          handle:doc.data().handle,
          audio:[...this.state.audio,"https://www.computerhope.com/jargon/m/example.mp3"]
        })
      ))
    ))
  }
  handleProfile=()=>{
    window.open("/profile","_self")
  }
  render(){
    return(
      <div class="feedPost" style={{
        width:100+"vw",
        height:100+"vh",
        color:"cyan"
      }}>
        <button onClick={this.handleProfile}></button>
        {this.state.audio.map((url)=>(
               <div className='posts'>
                 <br></br>
                <Post nameData={this.state.handle} audioUrl={url} calligself="false"></Post><br></br>
               </div>
               ))} 
      </div>
    )
  }
}
export default Feed