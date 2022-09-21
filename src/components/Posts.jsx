import { Post } from "./Post";

export const Posts = ({ userPosts, isUserSelected }) => {
  return (
    <div style={{ marginBottom: 12 }}>
      {userPosts &&
        isUserSelected &&
        userPosts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};
