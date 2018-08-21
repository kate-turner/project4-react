import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateComment extends Component {
    constructor() {
        super();

        this.state = {
            date: '',
            body: '',
            post: '',
        }
    }

    updateComment = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }

    render() {
        // console.log(this.props, ' this is props at createcomment');
        return (
            <div>
                <form onSubmit={this.props.addComment.bind(this, this.state)}>
                    
                    <input type="text" name="date" onChange={this.updateComment} placeholder="add date" />
                    <input type="text" name="body" onChange={this.updateComment} placeholder="add comment" />
                    <input type="checkbox" name="post" value={this.props.postID} onChange={this.updateComment} />
                    <input type="submit" value="Comment" />
                    <input type="reset" />
                </form>
            </div>
        )
    }
}

export default CreateComment;