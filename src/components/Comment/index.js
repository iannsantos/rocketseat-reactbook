import React from 'react';

import './style.css';

function Comment({ comment }) {

  return(
    <li>
      <div className="comment">
        <img src={comment.author.avatar} alt={comment.author.name}/>
        <div className="balloon">
          <p>
            <strong>{comment.author.name}</strong> {comment.content}
          </p>
        </div>
      </div>
    </li>
  );
}

export default Comment;