import React, { Component } from 'react'

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {data: props.data};
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);

  }
 
  handleCommentSubmit(comment) {
    
    let comments = this.state.data;
    
    let newComments = comments.concat([comment]);
    
    this.setState({
      data: newComments
    });
   
   
  }
  handleDelete(index) {
    
    let comments = this.state.data;
    
    comments.splice(index, 1);
    
    this.setState({
      data: comments
    })
  }
  render() {
    return(
      <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>  
        <CommentList data={this.state.data} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

class CommentForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = this.setState({
      author: '',
      text: ''
    })
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.text || !this.state.author) {
      return;
    }
    this.props.onCommentSubmit({author: this.state.author.trim(), text: this.state.text.trim()});
    this.setState({
      author: '',
      text: ''
    })
    return;
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit} className="row Container">
        <div className="col-xs-12">
          <h1>Comments</h1>
        </div>
        <div className="col-xs-12">
          <input type="text" placeholder="Your name" name="author" onChange={this.onChange} ref="author"/>
        </div>
        <div className="col-xs-12">
          <input type="text" placeholder="Say something..." name="text" onChange={this.onChange} ref="text"/>  
        </div>
        <div className="col-xs-12">
          <input type="submit" value="Post" />
        </div>
      </form>
    )
  }
}

class CommentList extends React.Component {
  render() {
    let handleDelete = this.props.handleDelete;
    
    let commentNodes = this.props.data.map((comment, i) => {
      return (
        <Comment author={comment.author} keyValue={i} handleDelete={handleDelete}>
          {comment.text}
        </Comment>
      )
    });
    return (
     
        {commentNodes}
     
    )
  }
};

class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.handleDelete(this.props.keyValue);
  }
  render() {
   
    return(
      <div className="row Container">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <span className="close" onClick={this.handleDelete}>
            <i className="fa fa-trash" />  
          </span>
          <h2>
            {this.props.author}
          </h2>
        </div>
        
      </div>
    );
  }
}

export default CommentBox;