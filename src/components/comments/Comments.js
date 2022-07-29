import { useState } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [rendering, setRendering] = useState(false);
  console.log('Comments')
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const reRenderHandler = () => {
    setRendering(!rendering);
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm reRender={reRenderHandler} />}
      <p>Comments...</p>
      <CommentsList rendering={rendering} />
    </section>
  );
};

export default Comments;
