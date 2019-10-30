import React, { Component } from 'react';

import './style.css';
import Comment from '../Comment';

function Post({ post }) {
  return (
    <li>
      <div className="container">
        <div className="header-post">
          <img src={post.author.avatar} alt={post.author.name}/>
          <div className="name-date">
            <p>{post.author.name}</p>
            <span>{post.date}</span>
          </div>
        </div>
        <div className="content">
          <p>{post.content}</p>
        </div>
        <div className="line"></div>
        <ul>
          {post.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    </li>
  );
}

export default Post;