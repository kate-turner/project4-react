import React from 'react';

const Comments = (props) => {
    let apiPostID = 'http://localhost:8000/api/commments/' + props.postID;

    const commentList = props.comments.map((comment, i) => {
        console.log(comment, ' this is comment');

        if(apiPostID === comment.post) {
            return (
                <li key={comment.id}>
                    <span>{comment.comment}</span><br/>
                    <span>{comment.post}</span><br/>
                    <button onClick={props.deleteComment.bind(null, comment.id)}>Delete</button>
                    <button onClick={props.showCommentModal.bind(null, comment.id)}>Edit</button>
                </li>
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