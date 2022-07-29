import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import classes from './NewCommentForm.module.css';

import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { quoteId } = useParams();
  const { sendRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    status === 'completed' && props.reRender();
  }, [status])

  if (status === 'pending') return <div className='centered'><LoadingSpinner /></div>;


  const submitFormHandler = (event) => {
    event.preventDefault();

    let comment = commentTextRef.current.value
    let commentData = {
      comment: { text: comment },
      quoteId
    };

    sendRequest(commentData);


    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
