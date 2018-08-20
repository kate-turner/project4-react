import React, { Component } from 'react';
import {
	Container, Row, Col, Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button, FormGroup
  } from 'reactstrap';

const EditPost = (props) => {
	return (


		<Container className="container-jumbo">
			<form onSubmit={props.closeAndEdit}>

				<FormGroup>
					<label className="date-label">Date:</label>
					<input className="form-control" type="text" name="date" value={props.postToEdit.date} onChange={this.updatePost} />
				</FormGroup>

				<FormGroup>
					<label className="title-label">Title:</label>
					<input className="form-control" type="text" name="title" value={props.postToEdit.title} onChange={this.updatePost} />
				</FormGroup>

				<FormGroup>
					<label className="body-label">Write post below:</label>
					<textarea className="form-control" rows="10" type="textarea" name="body" value={props.postToEdit.body} onChange={this.updatePost} />
				</FormGroup>

				<FormGroup>
					<label className="image-url-label">Paste image URL below:</label>
					<input className="form-control" name="img_url" value={props.postToEdit.img_url} onChange={this.updatePost} />
				</FormGroup>

				<hr className="my-2" />

				<FormGroup>
					<input className="submit-button" type='Submit' />
				</FormGroup>

			</form>
		</Container>

	)
}

export default EditPost;