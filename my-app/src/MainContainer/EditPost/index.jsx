import React, { Component } from 'react';

const EditPost = (props) => {
	return (
		<div>
			<h4> Edit Post </h4>
			<form onSubmit={props.closeAndEdit}>
				<label>
					Date:
					<input type="text" date="date" onChange={this.updatePost} placeholder={props.date}/>
				</label>
				<label>
					Title:
					<input type="text" title="title" onChange={this.updatePost} placeholder={props.title}/>
				</label>
				<label>
					Body:
					<input type="text" body="body" onChange={this.updatePost} placeholder={props.body}/>
				</label>
				<label>
					img_url:
					<input type="text" imgUrl="imgUrl" onChange={this.updatePost} placeholder={props.imgUrl}/>
				</label>
				<input type="Submit" />
			</form>
		</div>
	)
}

export default EditPost;