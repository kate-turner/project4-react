import React from 'react';
import EditCommentModal from '../EditCommentModal'


const Comments = (props) => {
    let apiPostID = 'http://localhost:8000/api/posts/' + props.postID + '/';

    const commentList = props.comments.map((comment, i) => {
        // console.log(comment, ' this is comment');
           console.log(props + 'LOOK AT THIS NOW PLZ')

        if(apiPostID === comment.post) {
            return (

                <div key={comment.id}>
                    <div className="scroll">
                        <ListGroup>
                            <ListGroupItem>

                                <span>{comment.date}</span><br />
                                <span>{comment.body}</span><br />
                                 <button onClick={props.deleteComment.bind(null, comment.id)}>Delete</button>
{/*                    <button onClick={props.showCommentModal.bind(null, comment.id)}>Edit</button>*/}
                  
              
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                    <div>
                        <button className="btn btn-danger btn-sm delete-comment-btn" onClick={props.deleteComment.bind(null, comment.id)}>Delete</button>
                        <button className="btn btn-warning btn-sm edit-commit-btn" onClick={props.showCommentModal.bind(null, comment.id)}>Edit</button>
                    </div>
                    <br></br>

                    <EditCommentModal
                        {...props}
                        commentID={comment.id}
                        showCommentModal={props.showCommentModal}
                        closeAndEditComment={props.closeAndEditComment}
                        commentToEdit={comment}
                        handleCommentFormChange={props.handleCommentFormChange}
                     />
      
      
                </div>

            )
        }
    })

    return (
        <ul>
            {commentList}
        </ul>
    )
};

export default Comments;