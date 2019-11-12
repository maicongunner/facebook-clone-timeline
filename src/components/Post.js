import React, { Component } from 'react';

import Comment from './Comment';

class Post extends Component {


  render() {

    const post = this.props.data;
    const commentsData = this.props.data.comments;

    return (
      <>
        <li key={post.id}>
          <div className="box-photo-post">
            <img src={post.author.avatar} alt=""/>
            <h4>{post.author.name} <span>{post.date}</span></h4>
          </div>
          <p>{post.content}</p>
          <ul className="box-comments">
            { commentsData.map(comment => <Comment key={comment.id} data={comment} />) }
          </ul>
        </li>
      </>
    )
  }



}

export default Post;