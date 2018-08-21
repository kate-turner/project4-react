import React, { Component } from 'react';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, FormGroup
} from 'reactstrap';

const PostShowPage = (props) => {
    return (
        <Container className="container">
            <h2 className="show-posts-h2">{post.title}</h2>
            <h4 className="show-posts-h4">{post.date}</h4>
            <img src={post.img_url} alt=""/>
            <p className="show-posts-p">{post.body}</p>




            <button onClick={props.deletePost.bind(null, post.id)}>Delete</button>
            <button onClick={props.showModal.bind(null, post.id)}>Edit</button>

            

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