import React, { Component } from 'react';

const EditPost = (props) => {
	return (
		<div>
			<h4> Edit Post </h4>
			<form onSubmit={props.closeAndEdit}>
				<label>
					Date:
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
				<input type="Submit"/>
			</form>
		</div>
	)
}

export default EditPost;