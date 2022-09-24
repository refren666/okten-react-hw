import { useEffect, useState } from 'react';

import { Comment } from '../../components';
import { jsonPlaceholderService } from '../../services/jsonPlaceholder.service';

export const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedComment, setSelectedComment] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    jsonPlaceholderService.getAllComments().then((res) => setComments(res));
  }, []);

  useEffect(() => {
    if (selectedPostId) {
      jsonPlaceholderService
        .getCommentPost(selectedPostId)
        .then((res) => setPost(res));
    }
  }, [selectedPostId]);

  const handleSeeCommentPost = (postId, comment) => {
    setSelectedPostId(postId);
    setSelectedComment(comment)
  }

  return (
    <div>
      <h2>COMMENTS: </h2>

      {comments?.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          post={post}
          selectedPostId={selectedPostId}
          selectedComment={selectedComment}
          handleSeeCommentPost={handleSeeCommentPost}
        />
      ))}
    </div>
  );
};
