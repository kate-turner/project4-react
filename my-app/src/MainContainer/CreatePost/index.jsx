import React, { Component } from 'react';

class CreatePost extends Component {
  constructor(props){
    super(props);


    this.state = {
      date: '',
      title: '',
      body: '',
	    img_url: ''
    }
  }
  updatePost = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});

  }

  render(){
    console.log(this.props, ' this is props')
  return (
    <form onSubmit={this.props.addPost.bind(this, this.state)}>
      <label>
        Post Date:
        <input type="text" date="date" onChange={this.updatePost}/>
      </label>
      <label>
        Title:
        <input type="text" title="title" onChange={this.updatePost}/>
      </label>
      <label>
        Body:
        <input type="text" body="body" onChange={this.updatePost}/>
      </label>
       <label>
        img_url:
        <input type="text" imgUrl="imgUrl" onChange={this.updatePost}/>
      </label>

      <input type='Submit'/>
    </form>

    )
  }

export default CreatePost;