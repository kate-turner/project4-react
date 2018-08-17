import React, { Component } from 'react';
import { Col, Container, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
   <Container>
    <form onSubmit={this.props.addPost.bind(this, this.state)}>
    <FormGroup row>  
      <label className="date-label">Post Date:</label>
      <Col sm={{ size: 10 }}>  
        <input type="text" date="date" onChange={this.updatePost}/>
      </Col>
    </FormGroup>
    
    <FormGroup row>
      <label className="title-label">Title:</label>
      <Col sm={{ size: 10 }}> 
        <input type="text" title="title" onChange={this.updatePost}/>
      </Col>
    </FormGroup>

    <FormGroup row>  
      <label className="body-label">Body:</label>
      <Col sm={{ size: 10 }}>   
        <textarea type="textarea" name="name" body="body" onChange={this.updatePost}/>
      </Col>
    </FormGroup>  
    
    <FormGroup row>   
       <label>Image URL:</label>
       <Col sm={{ size: 10 }}>   
        <input type="text" imgUrl="imgUrl" onChange={this.updatePost}/>
      </Col>
    </FormGroup>  
    
    <FormGroup row>
    <Col sm={{ size: 10, offset: 2 }}>   
      <input className="submit-button" type='Submit'/>
    </Col>
    </FormGroup>
    </form>
    </Container>
    )
  }
}

export default CreatePost;