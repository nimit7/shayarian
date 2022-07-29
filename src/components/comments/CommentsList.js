import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';

import { getAllComments } from '../../lib/api';
import useHttp from '../../hooks/use-http';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';

const CommentsList = (props) => {
  const { sendRequest, data: comments, status, error } = useHttp(getAllComments);
  const { quoteId } = useParams();

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId, props])

  if (status === 'pending') return <div className='centered'><LoadingSpinner /></div>

  console.log(comments)
  return (
    <ul className={classes.comments}>
      {comments && comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
