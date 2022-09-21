export const Post = ({ post }) => {
  return (
    <div>
      <p>
        Post #{post.id} - {post.title}
      </p>
    </div>
  );
};
