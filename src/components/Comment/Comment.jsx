import { CommentPost } from "../CommentPost/CommentPost";

export const Comment = ({
  comment,
  post,
  selectedPostId,
  selectedComment,
  handleSeeCommentPost,
}) => {
  const postBelongsToComment = comment.postId === post?.id;
  const isCurrentComment = selectedComment?.id === comment.id;

  return (
    <div key={comment.id} className="border-b-2 border-cyan-700 p-3">
      <h3>
        #{comment.id} {comment.name}
      </h3>

      <button
        className="text-red-500"
        onClick={() => handleSeeCommentPost(comment.postId, comment)}
      >
        See comment's post
      </button>

      {selectedPostId && postBelongsToComment && isCurrentComment && (
        <CommentPost post={post} />
      )}
    </div>
  );
};
