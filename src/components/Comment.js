import React, { Component } from 'react';

class Comment extends Component {

  render() {

    const dataComments = this.props.data;

    return (
      <li>
        <img src={dataComments.author.avatar} alt=""/>
        <p><b>{dataComments.author.name}</b> {dataComments.content}</p>
      </li>
    )
  }

}

export default Comment;
