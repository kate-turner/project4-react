import React, { Component } from 'react';
import Posts from './Posts';
import Aux from '../hoc/Aux';
import Navigation from '../Nav/Nav.jsx'
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import { Route, Switch, Link } from 'react-router-dom';

import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../App.css'
import Carousel from '../Carousel/Carousel';

class MainContainer extends Component {
  constructor() {
    super();

    this.state = {
      posts: ['hi'],
      showEdit: false,
      editPostId: null,
      postToEdit: {
        date: '',
        title: '',
        body: '',
        img_url: '',
      }
    }
  }
  componentDidMount() {
    this.getPosts().then((posts) => {
      this.setState({posts: posts})
    }).catch((err) => {
      console.log(err);
    })
  }

  getPosts = async () => {

    const posts = await fetch('http://localhost:8000/api/posts/');
    const postsJson = await posts.json();
    return postsJson

  }
  addPost = async (post, e) => {
    e.preventDefault();
    try {
      const createdPost = await fetch('http://localhost:8000/api/posts/', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const createdPostJson = await createdPost.json();
      if(createdPostJson.status === 200){
      this.setState({posts: [...this.state.posts, createdPostJson]});
    }else{
      console.log(createdPostJson)
    } 
  } catch(err) {
      console.log(err)
    }
  }
  
  deletePost = async (id, e) => {
    console.log(id, ' this is id of the post in the delete route');
    e.preventDefault();
    try {
      const deletePost = await fetch('http://localhost:8000/api/posts/' + id + '/', {
        method: 'DELETE',
      });
      console.log(deletePost, 'inside try');
      
      if (deletePost.status === 204) {
        this.setState({ posts: this.state.posts.filter((post, i) => post.id !== id) });
      } else {
        console.log('no deleting');
      } 
     } catch (err) {
      console.log(err, ' error')
      }
    }
      
      
  showModal = (id, e) => {
    // i comes before e, when called with bind
    const postToEdit = this.state.posts.find((post) => post.id === id)
    console.log(postToEdit, ' postToEdit')
    this.setState({
      showEdit: true,
      editPostId: id,
      postToEdit: postToEdit
    });
  }
  closeAndEdit = async (e) => {
    e.preventDefault();

    try {
      const editResponse = await fetch('http://localhost:8000/api/posts/' + this.state.editPostId + '/', {
        method: 'PUT',
        body: JSON.stringify(this.state.postToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const editResponseJson = await editResponse.json();

      const editedPostArray = this.state.posts.map((post) => {

        if (post.id === this.state.editPostId) {


          post.date = editResponseJson.date;
          post.title = editResponseJson.title;
          post.body = editResponseJson.body;
          post.imgUrl = editResponseJson.img_url;
        }

        return post
      });

      this.setState({
        post: editedPostArray,
        showEdit: false
      });



    } catch (err) {
      console.log(err);
    }

  }
  handleFormChange = (e) => {

    this.setState({
      postToEdit: {
        ...this.state.postToEdit,
        [e.target.name]: e.target.value
      }
    })
  }
  render() {
    console.log(this.state)
    return (
      <Aux>

        <Navigation />

        <Switch>
          <Route exact path="/" render={(props) => (
            <Posts posts={this.state.posts} deletePost={this.deletePost} showModal={this.showModal} />


          )} />

          <Route exact path="/new" render={(props) => (
            <CreatePost {...props} addPost={this.addPost} />

          )} />

        </Switch>

        {this.state.showEdit ? <EditPost closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} postToEdit={this.state.postToEdit} /> : null}


        <h1 className="main-title"> Whatever Blog</h1>

        <Carousel />

        <Container className="container">
          <Row>
            <Col>
              <Card>
                <CardImg top width="auto" src="https://i.imgur.com/1cNAbX6.jpg" alt="" />
                <CardBody>
                  <CardTitle>
                    <h3 className="blog-title"><a href="this.post.title">The best shrimp EVER!</a></h3>
                  </CardTitle>
                  <CardSubtitle>
                    <div key="this.post._id">
                      <a href="#">July 4, 2018</a>
                    </div>
                  </CardSubtitle>
                  <CardText className="blog-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat nisl id odio commodo aliquet. Maecenas lobortis, tellus sit amet ullamcorper tristique, risus libero aliquet velit, nec mollis purus purus eu velit. Suspendisse lacinia rutrum diam, nec viverra felis accumsan eu. Sed lacinia sagittis metus vitae malesuada. Maecenas mattis lacus elit. Vestibulum a fermentum metus, sit amet tincidunt metus. Donec sagittis sapien sit amet velit euismod eleifend. Sed ornare ante eros, eget facilisis nibh faucibus at. Nam ut augue vitae velit posuere scelerisque. Sed eleifend odio ac elementum gravida. Sed nisl risus, ullamcorper ut lacus quis, scelerisque iaculis sem. Donec ut quam interdum, viverra nunc vitae, elementum massa. Phasellus in lobortis nisl.
                  </CardText>

                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardImg top width="20%" src="https://i.imgur.com/P2tMdYj.jpg" alt="" />
                <CardBody>
                  <CardTitle>
                    <h3 className="blog-title"><a href="this.post.title">Only good in public!</a></h3>
                  </CardTitle>
                  <CardSubtitle>
                    <div key="this.post._id">
                      <a href="#">August 3, 2018</a>
                    </div>
                  </CardSubtitle>
                  <CardText className="blog-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat nisl id odio commodo aliquet. Maecenas lobortis, tellus sit amet ullamcorper tristique, risus libero aliquet velit, nec mollis purus purus eu velit. Suspendisse lacinia rutrum diam, nec viverra felis accumsan eu. Sed lacinia sagittis metus vitae malesuada. Maecenas mattis lacus elit. Vestibulum a fermentum metus, sit amet tincidunt metus. Donec sagittis sapien sit amet velit euismod eleifend. Sed ornare ante eros, eget facilisis nibh faucibus at. Nam ut augue vitae velit posuere scelerisque. Sed eleifend odio ac elementum gravida. Sed nisl risus, ullamcorper ut lacus quis, scelerisque iaculis sem. Donec ut quam interdum, viverra nunc vitae, elementum massa. Phasellus in lobortis nisl.
                  </CardText>

                </CardBody>
              </Card>
            </Col>

            <Col>
              <Card>
                <CardImg top width="20%" src="https://i.imgur.com/xTelMtI.jpg" alt="" />
                <CardBody>
                  <CardTitle>
                    <h3 className="blog-title"><a href="this.post.title">I was so sacred!</a></h3>
                  </CardTitle>
                  <CardSubtitle>
                    <div key="this.post._id">
                      <a href="#">September 3, 2017</a>
                    </div>
                  </CardSubtitle>
                  <CardText className="blog-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat nisl id odio commodo aliquet. Maecenas lobortis, tellus sit amet ullamcorper tristique, risus libero aliquet velit, nec mollis purus purus eu velit. Suspendisse lacinia rutrum diam, nec viverra felis accumsan eu. Sed lacinia sagittis metus vitae malesuada. Maecenas mattis lacus elit. Vestibulum a fermentum metus, sit amet tincidunt metus. Donec sagittis sapien sit amet velit euismod eleifend. Sed ornare ante eros, eget facilisis nibh faucibus at. Nam ut augue vitae velit posuere scelerisque. Sed eleifend odio ac elementum gravida. Sed nisl risus, ullamcorper ut lacus quis, scelerisque iaculis sem. Donec ut quam interdum, viverra nunc vitae, elementum massa. Phasellus in lobortis nisl.
                  </CardText>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Aux>
    );
  }
}


export default MainContainer;
