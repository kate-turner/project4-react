import React from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';





const Posts = (props) => {

  const postList = props.posts.map((post, i) => {
    console.log(post, ' post id')
    return (
      <Container className="container">
        <Row>
          <Col className="column-posts" sm="4">
            <Card>
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
              </CardBody>
            </Card>
          </Col>
        </Row>
        <button onClick={props.deletePost.bind(null, post.id)}>Delete</button>
        <button onClick={props.showModal.bind(null, post.id)}>Edit</button>
      </Container>

    )
  })
      
      
      
    return (

    <ul>
      {postList}
    </ul>
  )

};


export default Posts;