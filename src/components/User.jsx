import { useState } from 'react';

import { usersService } from '../services/users.service';
import { Posts } from './Posts';

export const User = ({ user }) => {
  const [isUserSelected, setSelectedUser] = useState(false);
  const [userPosts, setUserPosts] = useState([]);

  const handleFetchUserPosts = async () => {
    if (userPosts.length === 0) {
      const posts = await usersService.getPostsByUserId(user.id);
      setUserPosts(posts);
      setSelectedUser(!isUserSelected);
      return;
    }

    if (!isUserSelected) {
      setSelectedUser(!isUserSelected);
      return;
    }
    
    setSelectedUser(!isUserSelected);
  }
  
  return (
    <div>
      <h2>
        {user.id} - {user.name}
      </h2>

      <button onClick={handleFetchUserPosts}>See posts</button>

      <Posts userPosts={userPosts} isUserSelected={isUserSelected} />
    </div>
  );
}
