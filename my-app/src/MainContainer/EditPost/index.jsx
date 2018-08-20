import React, { Component } from 'react';

const EditPost = (props) => {
	return (
		<div>
			<h4> Edit Post </h4>
			<form onSubmit={props.closeAndEdit}>
				<label>
					Date:
					<input type="text" name="date" onChange={props.handleFormChange} defaultValue={props.date} />
				</label>
				<label>
					Title:
					<input type="text" name="title" onChange={props.handleFormChange} defaultValue={props.title} />
				</label>
				<label>
					Body:
					<input type="text" name="body" onChange={props.handleFormChange} defaultValue={props.body} />
				</label>
				<label>
					img_url:
					<input type="text" name="img_url" onChange={props.handleFormChange} defaultValue={props.img_url} />
				</label>
				<input type="Submit" />
			</form>
		</div>
	)
}

export default EditPost;