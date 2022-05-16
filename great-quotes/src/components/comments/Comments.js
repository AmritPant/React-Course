import { useState, useEffect, useCallback } from "react";
import useHttp from "../../hooks/use-http";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentList from "../comments/CommentsList";

const Comments = ({ quoteId }) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, data: loadedComment } = useHttp(getAllComments);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(
    () => sendRequest(quoteId),
    [sendRequest, quoteId]
  );

  useEffect(() => sendRequest(quoteId), [quoteId, sendRequest]);
  let comment;

  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  if (status === "completed" && loadedComment && loadedComment.length > 0)
    comment = <CommentList comment={loadedComment} />;

  if (status === "completed" && (loadedComment || loadedComment.length === 0))
    comment = <p className="centered">No comments are added yet</p>;

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comment}
    </section>
  );
};

export default Comments;
