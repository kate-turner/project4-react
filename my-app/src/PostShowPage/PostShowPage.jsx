import React, { Component } from 'react';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, FormGroup
} from 'reactstrap';

const PostShowPage = (props) => {
    return (
        <Container className="container">
            <Row>
                <Col>
                    <Card>
                        <CardImg top width="auto" src="{post.imgUrl}" alt="" />
                        <CardBody>
                            <CardTitle>
                                <h3 className="blog-title">{post.title}</h3>
                            </CardTitle>
                            <CardSubtitle>
                                <div key={post._id}>
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
            <button onClick={props.deletePost.bind(null, post._id)}>Delete</button>
            <button onClick={props.showModal.bind(null, post._id)}>Edit</button>

            <Row>
                <Col>
                    <Card>
                        <CardText className="comment-body">
                            this is where the comment will show up but, I don't know the route?
                        </CardText>
                    </Card>
                </Col>
            </Row>

            <FormGroup>
                <form onSubmit="#">
                    <label className="body-label">Write Comment below:</label>
                    <textarea className="form-control" rows="10" type="textarea" name="name" body="body" onChange="#" />
                    <input className="submit-button" type='Submit' />
                </form>
            </FormGroup>
        </Container>

    )
}

export default PostShowPage;