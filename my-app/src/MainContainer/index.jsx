import React, { Component } from 'react';
import Posts from './Posts';
import CreatePost from './CreatePost';

class MainContainer extends Component {
	constructor(){
		super();

		this.state = {
			posts: [],
			editPostId: null,
			postToEdit: {
				date: '',
				title: '',
				body: '',
				img_url: ''
			}
		}
	}



	render(){
		return (
			<div>
				<Posts posts={this.state.posts} />
				<CreatePost addPost={this.state.posts} />
			</div>
		)
	}
}

export default MainContainer;
