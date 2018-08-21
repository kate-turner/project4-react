import React from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck
} from 'reactstrap';
import CreateComment from '../Comments/AddComment';
import Comments from '../Comments.js'





const Posts = (props) => {

  const postList = props.posts.map((post, i) => {
    console.log(post, ' post id')

    // console.log(props.comments[0], ' this is props comments in Posts');
    return (
      
      <Col className="column-posts" sm={6}>
        <Card key={post.id}>
          <CardImg top width="auto" src={post.img_url} alt="" />
          <CardBody>
            <CardTitle>
              <h3 className="blog-title">{post.title}</h3>
            </CardTitle>
            <CardSubtitle>
              <div key={post.id}>
                <h6>{post.date}</h6>
              </div>
            </CardSubtitle>
            <CardText className="blog-body">
              {post.body}
            </CardText>
            <button className="btn btn-danger btn-sm delete-btn" onClick={props.deletePost.bind(null, post.id)}>Delete</button>
            <button className="btn btn-warning btn-sm edit-btn" onClick={props.showModal.bind(null, post.id)}>Edit</button>  

            <CreateComment postID={'http://localhost:8000/api/posts/' + post.id + '/'} addComment={props.addComment} /> 

            <Comments postID={post.id} comments={props.comments} deleteComment={props.deleteComment} showCommentModal={props.showCommentModal} />


          </CardBody>
        </Card>
      </Col>

    )
  })
      
      
      
    return (
      <Container className="container">
        <Row>
          <CardDeck>
            {postList}
          </CardDeck>
        </Row>
      </Container>  
  )

};


export default Posts;