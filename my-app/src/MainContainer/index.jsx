import React, { Component } from 'react';
import Posts from './Posts';
import Aux from '../hoc/Aux';
import Navigation from '../Nav/Nav.jsx'
import CreatePost from './CreatePost';

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';

class MainContainer extends Component {
	constructor(){
		super();

		this.state = {
			posts: ['hello','hi'],
			editPostId: null,
			postToEdit: {
				date: '',
				title: '',
				body: '',
				imgUrl: '',
			}
		}
	}
  componentDidMount(){
    this.getPosts().then((posts) => {
      this.setState({posts: posts.data})
    }).catch((err) => {
      console.log(err);
    })
  }

 getPosts = async () => {

    const posts = await fetch('http://localhost:9000/api/v1/posts');
    const postsJson = await posts.json();
    return postsJson

  }
  addPost = async (post, e) => {
    e.preventDefault();
    try {
        const createdPost = await fetch('http://localhost:9000/api/v1/posts', {
          method: 'POST',
          body: JSON.stringify(post),
          headers:{
            'Content-Type': 'application/json'
          }
        });

        const createdPostJson = await createdPost.json();
        this.setState({posts: [...this.state.posts, createdPostJson.data]});
    } catch(err) {
      console.log(err)
    }
  }
  deletePost = async (id, e) => {
    console.log(id, ' this is id')
    e.preventDefault();
    try {
        const deletePost = await fetch('http://localhost:9000/api/v1/posts/' + id, {
          method: 'DELETE'
        });
        console.log('inside try')
        const deletePostJson = await deletePost.json();
        this.setState({posts: this.state.posts.filter((post, i) => post._id !== id)});

 } catch(err) {
      console.log(err, ' error')
    }


  }
  showModal = (id, e) => {
    // i comes before e, when called with bind
    const postToEdit = this.state.posts.find((post) => post._id === id)
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
      const editResponse = await fetch('http://localhost:9000/api/v1/posts/' + this.state.editMovieId, {
        method: 'PUT',
        body: JSON.stringify(this.state.postToEdit),
        headers:{
          'Content-Type': 'application/json'
        }
      });

      const editResponseJson = await editResponse.json();

      const editedPostArray = this.state.posts.map((post) => {

              if(post._id === this.state.editPostId){


                post.date = editResponseJson.data.date;
                post.title = editResponseJson.data.title;
                post.body = editResponseJson.data.body;
                post.imgUrl = editResponseJson.data.imgUrl;
              }

              return post
      });

       this.setState({
        post: editedPostArray,
        showEdit: false
       });



    } catch(err) {
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
  render(){
    console.log(this.state)
    return (
	<Aux>
        
  <Navigation />

		<Posts posts={this.state.posts} />
    <CreatePost addPost={this.addPost} />

	  


	  </Aux>
    );
  }
}


export default MainContainer;
