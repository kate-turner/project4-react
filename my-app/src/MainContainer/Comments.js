import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Comments = (props) => {
    let apiPostID = 'http://localhost:8000/api/posts/' + props.postID + '/';

    const commentList = props.comments.map((comment, i) => {
        console.log(comment, ' this is comment');

        if (apiPostID === comment.post) {
            return (
                <div key={comment.id}>

                    <ListGroup>
                        <ListGroupItem>
                            <span>{comment.date}</span><br />
                            <span>{comment.body}</span><br />
                        </ListGroupItem>

                    </ListGroup>

                    <div>
                        <button className="btn btn-danger btn-sm delete-comment-btn" onClick={props.deleteComment.bind(null, comment.id)}>Delete</button>
                        <button className="btn btn-warning btn-sm edit-commit-btn" onClick={props.showCommentModal.bind(null, comment.id)}>Edit</button>
                    </div>
                    <br></br>

                </div>
            )
        }
    })

    return (
        <div>
            <h3>Comments:</h3>
            {commentList}
        </div>
    )
};

export default Comments;