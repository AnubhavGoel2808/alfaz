import React, { useEffect, useState } from "react";
import AddPost from "./AddPost";
import Navbar from "./Navbar";
import Post from './post'
import {db} from '../firebase'
import { Component } from "react";
class Feeds extends Component {
  constructor(props){
    super(props);
    this.state={
      audio:[]
    }
  }
  componentDidMount(){
        db.collection("post")
    .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
          this.setState({
           audio:[...this.state.audio,{
             url:doc.data().audio,
             handle:doc.data().handle,
             des:doc.data().description
           }],
          })
        });
    });
  }
  render(){
  return (
    <div style={{
      height:"100vh"
    }}>
      <Navbar></Navbar>
      <div style={{
        paddingLeft:"10%",
        paddingRight:"10%"
      }}>
      <AddPost ></AddPost>
      {this.state.audio.map((data)=>(
               <div className='posts'>
                 <br></br>
                <Post nameData={data.handle} audioUrl={data.url} description={data.des} ></Post><br></br>
               </div>
               ))} 
     </div>
    </div>
  );
}
}
export default Feeds;
