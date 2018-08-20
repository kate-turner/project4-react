import React from 'react';



const Posts = (props) => {

  const postList = props.posts.map((post, i ) => {
    console.log(post, ' post id')
    return (
      <li key={post.id}> 
        <h1>{post.title}</h1><br/>
        <small>{post.date}</small><br/>
        <small>{post.body}</small><br/>
        <img src={post.img_url}/>
        <button onClick={props.deletePost.bind(null, post.id)}>Delete</button>
        <button onClick={props.showModal.bind(null, post.id)}>Edit</button>
    </li>
    )  
  })



  return (

    <ul>
      {postList}
    </ul>
    )

};


export default Posts;